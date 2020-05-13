<template>
    <article id="Register" class="account-form">
        <h1>Register</h1>

        <form @submit.prevent="register">
            <div class="form-group">
                <input type="text" placeholder="ID" v-model="user.id">
            </div>
            <div class="form-group">
                <input type="text" placeholder="Name" v-model="user.name">
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" v-model="user.password">
            </div>

            <div class="btn-wrap">
                <input type="submit" class="btn-submit" value="Register">
                <router-link class="btn-link"
                    to="/login">back</router-link>
            </div>
        </form>
    </article>
</template>

<script>
export default {
    name: 'Register',
    data () {
        return {
            user: {
                id: '',
                name: '',
                password: ''
            }
        }
    },
    methods: {
        register () {
            console.log('Register');
        }
    }
}
</script>
