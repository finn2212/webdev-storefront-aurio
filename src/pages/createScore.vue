<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add User</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add User</button>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in Users" :key="user.key">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.phone }}</td>
                            <td>
                                <router-link :to="{ name: 'edit', params: { id: user.key } }" class="btn btn-primary">Edit
                                </router-link>
                                <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <button @click="click1">choose a photo</button>
            <input type="file" ref="input1" style="display: none" @change="previewImage" accept="image/*">
        </div>

        <div v-if="imageData != null">
            <img class="preview" height="268" width="356" :src="img1">
            <br>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'firebase/storage';
import firebase from 'firebase';
export default {
    data() {
        return {
            user: {
            },
            Users: [],
            caption: '',
            img1: '',
            imageData: null

        }

    },
    created() {
        db.collection('users').onSnapshot((snapshotChange) => {
            this.Users = [];
            snapshotChange.forEach((doc) => {
                this.Users.push({
                    key: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    phone: doc.data().phone
                })
            });
        })
    },
    methods: {
        onFormSubmit(event) {
            event.preventDefault()
            db.collection('users').add(this.user).then(() => {
                alert("User successfully created!");
                this.user.name = ''
                this.user.email = ''
                this.user.phone = ''
            }).catch((error) => {
                console.log(error);
            });
        },
        click1() {
            this.$refs.input1.click()
        },

        previewImage(event) {
            this.uploadValue = 0;
            this.img1 = null;
            this.imageData = event.target.files[0];
            this.onUpload()
        },

        onUpload() {
            this.img1 = null;
            const storageRef = db.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, error => { console.log(error.message) },
                () => {
                    this.uploadValue = 100;
                    storageRef.snapshot.ref.getDownloadURL().then((url) => {
                        this.img1 = url;
                        console.log(this.img1)
                    });
                }
            );
        },
    }
}
</script>