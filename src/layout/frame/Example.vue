<template>
    <div>
        <div v-for="i in 100">{{i}}</div>
    </div>
</template>

<script>
    export default {
        name: "Example",
        mounted() {
            this.$store.dispatch('setting/changeSetting', {
                isFullPage: false
            })

        },
        destroy() {
            this.$store.dispatch('setting/changeSetting', {
                isFullPage: true
            })
        }
    }
</script>

<style scoped>

</style>