<template>
    <article id="login" class="account-form">
        <h1>Login</h1>

        <form @submit.prevent="login">
            <div class="form-group">
                <input type="text" placeholder="ID" v-model="user.id">
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" v-model="user.password">
            </div>

            <div class="btn-wrap">
                <input type="submit" class="btn-submit" value="Login">
            </div>
        </form>
    </article>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            user: {
                id: '',
                password: ''
            }
        }
    },
    methods: {
        login () {
            console.log('login');
        }
    }
}
</script>
