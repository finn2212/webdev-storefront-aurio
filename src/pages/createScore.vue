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
                        <client-only>
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
                    </client-only>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="imageData != null">
            <img class="preview" height="268" width="356" :src="img1">
            <br>
        </div>
        <input type="text" class="form-control" v-model="productName">
        <input type="number" class="form-control" v-model="quantity">

        <div>
            <button @click="createNewProductInStore">API CALL</button>
        </div>
        <div>
            <button @click="createUuid">Get</button>
        </div>


        <div>
            <button @click="add('S1z7EsuGS9ulJwRA4ZyJSFDEuDbK2GOV')">API CALL</button>
        </div>
        <button type="button" @click="open">To Checkout</button>

        <SfModal v-model="isOpen" class="max-w-[90%] md:max-w-lg" tag="section" role="alertdialog"
            aria-labelledby="promoModalTitle" aria-describedby="promoModalDesc">
            <header>
                <SfButton square variant="tertiary" class="absolute right-2 top-2" @click="close">
                    close
                </SfButton>
                <h3 id="promoModalTitle" class="font-bold typography-headline-4 md:typography-headline-3">
                    You might miss out on great deals
                </h3>
            </header>
        </SfModal>
    </div>
</template>
<script>
import { db } from '../firebaseDb';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'firebase/storage';
import axios from 'axios';
import { SfModal, SfButton
} from "@storefront-ui/vue"

export default {
    components: {
     SfModal,
    SfButton,

  },
    data() {
        return {
            isOpen: false,
            user: {
            },
            Users: [],
            img1: '',
            imageData: null,
            product: null,
            productName: "",
            quantity: 0,
            price: 0

        }

    },
    created() {
        db.firestore().collection('users').onSnapshot((snapshotChange) => {
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
        close(){
            this.isOpen= false
        },
        open(){
            this.isOpen = true;
        },
        createUuid() {
            axios({
                url: 'https://www.uuidtools.com/api/generate/v1', // File URL Goes Here
                method: 'GET',
            }).then((res) => {
                this.createNewProductInStore(res.data[0]);
            });


        },
        createNewProductInStore(productNumber) {
            // const productNumber = 'xxx'
            axios({
                url: 'https://26485.s15269.creoline.cloud/api/oauth/token', // File URL Goes Here
                method: 'POST',
                data: {
                    grant_type: 'client_credentials',
                    client_id: 'SWIAUGVGATL1T0TKA0VBNNRSNQ',
                    client_secret: 'blJmVmpFWTRpTzlVVHN5bVhRMnJWZlZOck1tQklaMEdIZ0hVNXo'
                },
            }).then((res) => {
                console.log(res.data.access_token)
                axios({
                    url: 'https://26485.s15269.creoline.cloud/api/product',
                    headers: {
                        "Accept": 'application/json',
                        "Authorization": res.data.access_token,
                        "Content-Type": 'application/json',
                    },
                    method: 'POST',
                    data: {
                        "name": this.productName,
                        "productNumber": productNumber,
                        "stock": 10,
                        "taxId": "49ad39168485457a836441d13c6bd473",
                        "active": true,
                        "keywords": "2212",
                        "price": [
                            {
                                "currencyId": "b7d2554b0ce847cd82f3ac9bd1c0dfca",
                                "gross": 15,
                                "net": 10,
                                "linked": false
                            }

                        ],
                        'visibilities': [
                            {
                                'salesChannelId': 'fac913bddf1244098e07a811fd301f75',
                                'visibility': 30
                            }

                        ]
                    },
                })
            }).then((res) => {

                setTimeout(() => this.getCreatedProduct(productNumber), 1000);


            });
        },
        getCreatedProduct(productNumber) {
            axios({
                url: 'https://26485.s15269.creoline.cloud/store-api/search', // File URL Goes Here
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "sw-access-key": 'SWSCZNPHTKX6VHMYYJK3UZDGRW'
                },
                data: {
                    "search": productNumber
                }
            }).then((res) => {
                debugger
                console.log('res.data.elements[0]._uniqueIdentifier');
                console.log(res.data.elements[0]._uniqueIdentifier);
                this.add(res.data.elements[0]._uniqueIdentifier)
            });


        },
        add(id) {
            const contextToken = this.$cookies.get("sw-context-token") || "";
            axios({
                url: 'https://26485.s15269.creoline.cloud/store-api/checkout/cart/line-item', // File URL Goes Here
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "sw-access-key": 'SWSCZNPHTKX6VHMYYJK3UZDGRW',
                    "sw-context-token": contextToken
                },
                data: {
                    "items": [
                        {
                            id: id,
                            quantity: Number(this.quantity),
                            referencedId: id,
                            type: "product",
                        }
                    ]
                }
            }).then((res) => {

                window.location.reload()
            });
        },
        onFormSubmit(event) {
            event.preventDefault()
            db.firestore().collection('users').add(this.user).then(() => {
                alert("User successfully created!");
                this.user.name = ''
                this.user.email = ''
                this.user.phone = ''
            }).catch((error) => {
                console.log(error);
            });
        },

        previewImage(event) {
            this.uploadValue = 0;
            this.img1 = null;
            this.imageData = event.target.files[0];
            this.onUpload()
        },
        onUpload() {
            this.img1 = null;
            const storageRef = db.storage().ref(`uploads/${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(this.uploadValue);
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

