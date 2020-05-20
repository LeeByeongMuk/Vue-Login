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
                <router-link class="btn-link"
                    to="/register">register</router-link>
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
            this.axios.post('/api/login', {
                user: this.user
            }).then(res => {
                if (res.data.status == 200) {
                    alert(res.data.message);
                    this.$store.commit('loginToken', res.data.token);
                    this.$router.push('/');
                } else {
                    alert('오류');
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
