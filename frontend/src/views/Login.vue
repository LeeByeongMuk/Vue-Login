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
            if (this.user.id == '') {
                return alert('아이디를 입력해주세요.');
            }

            if(this.user.password == '') {
                return alert('비밀번호를 입력해주세요');
            }

            this.axios.post('/api/login', {
                user: this.user
            }).then(res => {
                alert(res.data.message);

                if (res.data.status == 200) {
                    this.$store.commit('loginToken', res.data.token);
                    this.$router.push('/');
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
