<script setup lang="ts">
import { ref } from 'vue';
import { IonButton, IonContent, IonInput, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { statusBarImage, studentxImage } from '../assets/figmaImages';
import { email } from '../stores/session';

const router = useRouter();
const password = ref('');

function logIn() {
  password.value = '';
  router.replace('/assistant');
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false" class="studentx-content">
      <main class="app-stage">
        <section class="phone-shell" aria-label="StudentX login">
          <section class="screen screen-login">
            <img class="status-bar" :src="statusBarImage" alt="" />

            <div class="brand-lockup" aria-hidden="true">
              <img :src="studentxImage" alt="" />
              <span>StudentX</span>
            </div>

            <form class="login-sheet" @submit.prevent="logIn">
              <header class="screen-header">
                <p class="eyebrow">Beta access</p>
                <h1>Log in</h1>
                <p>Continue into the StudentX assistant preview.</p>
              </header>

              <label class="field">
                <span>Email</span>
                <ion-input
                  v-model="email"
                  class="field-input"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  placeholder="student@example.com"
                />
              </label>

              <label class="field">
                <span>Password</span>
                <ion-input
                  v-model="password"
                  class="field-input"
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  required
                  placeholder="Password"
                />
              </label>

              <ion-button class="primary-button login-button" type="submit">Log in</ion-button>
            </form>
          </section>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>
