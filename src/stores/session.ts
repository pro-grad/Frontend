import { computed, ref } from 'vue';

export type MessageRole = 'assistant' | 'user';

export interface ChatMessage {
  id: number;
  role: MessageRole;
  text: string;
}

export const email = ref('');

export const messages = ref<ChatMessage[]>([
  {
    id: 1,
    role: 'assistant',
    text: 'Welcome to the StudentX beta. I am ready to help test the assistant experience.',
  },
]);

export const firstName = computed(() => {
  const value = email.value.split('@')[0]?.trim();
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : 'Student';
});

export function addUserMessage(text: string) {
  messages.value.push({
    id: Date.now(),
    role: 'user',
    text,
  });
}

export function addAssistantPlaceholder() {
  messages.value.push({
    id: Date.now() + 1,
    role: 'assistant',
    text: 'StudentX AI backend response will appear here once the beta endpoint is connected.',
  });
}
