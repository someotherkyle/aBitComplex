<template>
  <LoginForm />
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm,
    RegistrationForm,
  },
}
</script>
