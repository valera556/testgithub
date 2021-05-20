<template>
    <div>
        <input type="text" placeholder="Write something" v-model="text" />
        <input type="button" value="Save" @click="save" />
    </div>
</template>

<script>
    import axios from "axios"

    function getIndex(list, id) {
        for (var i = 0; i < list.length; i++ ) {
            if (list[i].id === id) {
                return i
            }
        }

        return -1
    }

    export default {
        props: ['messages', 'messageAttr'],
        data() {
            return {
                text: '',
                id: ''
            }
        },
        watch: {
            messageAttr(newVal, oldVal) {
                this.text = newVal.text
                this.id = newVal.id
            }
        },
        methods: {
            save() {
                let url = process.env.VUE_APP_API_ENDPOINT + `/message/${this.id}`
                const message = { text: this.text }
                if (this.id) {
                    axios.put(url, message)
                        .then(result => {
                                const index = getIndex(this.messages, result.data.id)
                                this.messages.splice(index, 1, result.data)
                                this.text = ''
                                this.id = ''
                        })
                } else {
                    this.$http.post(url, {text: this.text})
                        .then(result => {
                            this.messages.push(result.data)
                            this.text = ''
                        })
                }
/*                if (this.id) {
                    this.$resource('/message{/id}')
                        .update({id: this.id}, message)
                        .then(result => result.json().then(data => {
                            const index = getIndex(this.messages, data.id)
                            this.messages.splice(index, 1, data)
                            this.text = ''
                            this.id = ''
                        })
                    )
                } else {
                    this.$resource('/message{/id}').save({}, message).then(result =>
                        result.json().then(data => {
                            this.messages.push(data)
                            this.text = ''
                        })
                    )
                }*/
            }
        }
    }
</script>

<style>

</style>
