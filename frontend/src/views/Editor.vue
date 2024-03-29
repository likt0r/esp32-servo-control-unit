<script lang="ts" setup>
import { ref, onMounted } from "vue";
import throttle from "lodash/throttle";
import { mdiAngleAcute, mdiSpeedometer } from "@mdi/js";
import ViewWrapper from "@/components/ViewWrapper.vue";
import apiService from "@/ApiService";
import { Servo, MotionModeModeEnum, MotionMode } from "@/ApiService";

import useAppStore from "@/store/app";
const { publishAlert } = useAppStore();
const loadingServos = ref(false);
const loadingLeds = ref(false);
const servos = ref<Servo[]>([]);
const motionSpeed = ref<number>(0.1);
const motionMode = ref<MotionModeModeEnum>(MotionModeModeEnum.Idle);

// const currentMotionSequence = ref<MotionSequence>(createNewMotionSequence());

// function createNewMotionSequence(): MotionSequence {
//    return {
//       name: "New Motion Sequence",
//       id: nanoid(),
//       loop: false,
//       speedMultiplier: 1,
//       keyframes: new Array<Keyframe>(),
//    };
// }

onMounted(async () => {
   loadingServos.value = true;
   try {
      loadingServos.value = true;
      const servoResponse = await apiService.getServos();
      servos.value = servoResponse.data;
      const modeResponse = await apiService.setMotionMode({
         mode: MotionModeModeEnum.RemoteControl,
      });
   } catch (error: any) {
      console.log("error", error);
      publishAlert("error", "Could not load Servos", JSON.stringify(error));
   }
   loadingServos.value = false;
});

const onPositionUpdate = throttle(async (id: number, position: number) => {
   try {
      await apiService.setServoPosition({
         id,
         position,
      });
   } catch (error) {
      console.log("error", error);
      publishAlert(
         "error",
         "Error updating servo position",
         JSON.stringify(error)
      );
   }
}, 250);

const onMotionSpeedUpdate = throttle(async (speed: number) => {
   try {
      await apiService.setMotionSpeed({ speed });
   } catch (error) {
      console.log("error", error);
      publishAlert(
         "error",
         "Error updating motion speed",
         JSON.stringify(error)
      );
   }
}, 250);
</script>

<template>
   <ViewWrapper>
      <v-card flat>
         <v-card-text>
            <v-container fluid>
               <!-- <MotionSequenceComponent :sequence="currentMotionSequence" /> -->

               <v-row>
                  <v-col cols="12" sm="10" md="10">
                     <div class="text-caption">
                        Motion Speed: {{ motionSpeed }}
                     </div>

                     <v-slider
                        density="compact"
                        v-model="motionSpeed"
                        :min="0"
                        :max="5"
                        :step="0.01"
                        color="secondary"
                        @update:model-value="onMotionSpeedUpdate"
                        thumb-label
                        :prepend-icon="mdiSpeedometer"
                     ></v-slider>
                  </v-col>
                  <v-col cols="12" sm="2" md="2">
                     <v-text-field
                        v-model="motionSpeed"
                        type="number"
                        :step="0.05"
                        variant="outlined"
                        hide-details="auto"
                     ></v-text-field>
                  </v-col>
               </v-row>
               <v-row v-for="(servo, index) in servos" :key="servo.id">
                  <v-col cols="12" sm="10" md="10">
                     <div class="text-caption">Servo Pin: {{ servo.pin }}</div>

                     <v-slider
                        v-model="servo.position"
                        :min="servo.minAngle"
                        :max="servo.maxAngle"
                        :step="0.1"
                        color="primary"
                        thumb-label
                        @update:model-value="onPositionUpdate(servo.id, $event)"
                        :prepend-icon="mdiAngleAcute"
                     ></v-slider>
                  </v-col>
                  <v-col cols="12" sm="2" md="2">
                     <v-text-field
                        v-model="servo.position"
                        type="number"
                        variant="outlined"
                        hide-details="auto"
                     ></v-text-field>
                  </v-col>
               </v-row>
            </v-container>
         </v-card-text>
      </v-card>
   </ViewWrapper>
</template>
