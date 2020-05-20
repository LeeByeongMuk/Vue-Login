<template>
    <article id="home" class="home-container">
        <h1>User Info</h1>

        <div class="info-wrap">
            <div class="info-group">
                <h2>Login ID</h2>
                <p v-if="user">
                    {{ user.login_id }}
                </p>
            </div>
            <div class="info-group">
                <h2>Name</h2>
                <p v-if="user">
                    {{ user.name }}
                </p>
            </div>
        </div>

        <div class="btn-wrap">
            <a href="#" class="btn-logout"
               v-if="user"
               @click="logout">
               Logout
           </a>
            <router-link to="/login" class="btn-logout"
                         v-else>
                Login
            </router-link>
        </div>
    </article>
</template>

<script>

export default {
    name: 'Home',
    data () {
        return {
            user: ''
        }
    },
    mounted () {
        this.user = this.getUser
    },
    computed: {
        getUser () {
            if (this.$store.state.token) {
                return JSON.parse(atob(this.$store.state.token.split('.')[1]));
            }
        }
    },
    methods: {
        logout () {
            this.$store.commit('logout');
            this.user = '';
            alert('로그아웃 되었습니다.');
        }
    }
}
</script>
