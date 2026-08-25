<script setup lang="ts">
import { IonButton, IonContent, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { statusBarImage, studentxImage } from '../assets/figmaImages';

const router = useRouter();

function goToLogin() {
  router.push('/login');
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false" class="studentx-content">
      <main class="app-stage">
        <section class="phone-shell" aria-label="StudentX onboarding">
          <section class="screen screen-onboarding">
            <img class="status-bar" :src="statusBarImage" alt="" />
            <img class="onboarding-mark" :src="studentxImage" alt="" data-node-id="1:97" />

            <div class="onboarding-sheet" data-node-id="1:96">
              <div class="onboarding-copy" data-node-id="1:101">
                <h1 data-node-id="1:103">Show-casing Student Xperience and Skills.</h1>
                <p data-node-id="1:104">Help a student build, track and showcase real Tech skills....</p>
              </div>

              <ion-button class="primary-button onboarding-button" data-node-id="1:111" @click="goToLogin">
                Next
              </ion-button>
            </div>
          </section>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>
