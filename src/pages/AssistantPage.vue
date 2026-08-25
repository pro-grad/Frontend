<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { IonButton, IonContent, IonInput, IonPage } from '@ionic/vue';
import { statusBarImage } from '../assets/figmaImages';
import { addAssistantPlaceholder, addUserMessage, firstName, messages } from '../stores/session';

const draft = ref('');
const chatLog = ref<HTMLElement | null>(null);

async function sendMessage() {
  const text = draft.value.trim();

  if (!text) {
    return;
  }

  addUserMessage(text);
  draft.value = '';

  // Replace this mock with the fine-tuned AI endpoint when the backend contract is ready.
  addAssistantPlaceholder();

  await nextTick();
  chatLog.value?.scrollTo({ top: chatLog.value.scrollHeight, behavior: 'smooth' });
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true" :scroll-y="false" class="studentx-content">
      <main class="app-stage">
        <section class="phone-shell" aria-label="StudentX AI assistant">
          <section class="screen screen-assistant">
            <img class="status-bar" :src="statusBarImage" alt="" />

            <header class="assistant-header">
              <div>
                <p class="eyebrow">StudentX AI</p>
                <h1>Hi, {{ firstName }}</h1>
              </div>
              <span class="beta-badge">Beta</span>
            </header>

            <div ref="chatLog" class="chat-log" aria-live="polite">
              <article v-for="message in messages" :key="message.id" class="message" :class="`message-${message.role}`">
                <p>{{ message.text }}</p>
              </article>
            </div>

            <form class="composer" @submit.prevent="sendMessage">
              <label class="sr-only" for="message">Message</label>
              <ion-input id="message" v-model="draft" class="composer-input" type="text" autocomplete="off" placeholder="Message StudentX AI" />
              <ion-button class="send-button" type="submit" aria-label="Send message">
                Send
              </ion-button>
            </form>
          </section>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>
