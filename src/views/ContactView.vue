<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Name *</label>
      <input id="name" v-model="formData.name" placeholder="Enter your name" required>
    </div>

    <div class="form-group">
      <label for="email">Email *</label>
      <input id="email" v-model="formData.email" placeholder="Enter your email" type="email" required>      
    </div>

    <div class="form-group">
      <label for="subject">Subject:</label>
      <input id="subject" v-model="formData.subject" placeholder="Type the subject">      
    </div>

    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" v-model="formData.message" placeholder="Type your message here..." rows="4"></textarea>      
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log("submitted")
    }
  },
};
</script>

<style>
form {
  text-align: left;
}

label { 
  display:block 
}

input, textarea, button {
  width: 100%;
}

button {
  background-color: black;
  color: white;
  padding: 1rem 0;
  font-size: 18px;
}
</style>