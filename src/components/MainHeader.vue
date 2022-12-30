<template>
    <nav class="head-wrapper" @mouseleave="hideModal">
        <div class="logo" @click="hideModal"><router-link to="/"><img src="@/../public/images/logo.png"></router-link></div>
        <div class="categories">
            <div @mouseenter="showModal($event,'men')" @click="hideModal"><router-link to="/men">MEN</router-link></div>
            <div @mouseenter="showModal($event,'women')" @click="hideModal"><router-link to="/women">WOMEN</router-link></div>
            <!-- <div @mouseenter="showModal($event,'kids')" @click="hideModal">KIDS</div> -->
        </div>
        <div class="search">
            <input type="text" v-model="searchQuery" @keyup.enter="submitSearchQuery">
            <i class="search-icon fa-solid fa-magnifying-glass" @click="submitSearchQuery"></i>
        </div>
        <div class="right-panel">
            <div class="notifications"><i class="notifications-icon fa-solid fa-bell"></i></div>
            <div class="cart" ref="cart"><router-link to="/cart"><i class="cart-icon fa-solid fa-cart-shopping"></i></router-link></div>
            <div class="profile" @click="showModal($event)"><i class="profile-icon fa-solid fa-user"></i></div>
        </div>
        <div class="modal" ref="modal" @mouseleave="hideModal">
            <CategoryChoices v-if="selectedCategory" :category="selectedCategory" @closeModal="hideModal"></CategoryChoices>
            <ProfileMenu v-else></ProfileMenu>
            <div v-if="selectedCategory" class="close"><span @click="hideModal">&times;</span></div>
        </div>
        <div class="itemInCart" ref="itemInCart">
            <div>{{itemsInCartCount}}</div>
        </div>
    </nav>
</template>
 
<script>
    import CategoryChoices from '@/components/CategoryChoices.vue';
    import { mapActions, mapGetters, mapMutations } from 'vuex';
    import ProfileMenu from './ProfileMenu.vue';
    export default {
        name: 'MainHeader',
        data() {
            return {
                flagSubmitCheck: 0,
                searchQuery: '',
                selectedCategory: '',
                itemsInCart: 0,
                modalRef: null
            }
        },
        components: {
            CategoryChoices,
            ProfileMenu,
        },
        computed: {
            ...mapGetters(['getItemsInCartCount', 'getSearchQuery']),
            itemsInCartCount () {
                return this.getItemsInCartCount()
            },
        },
        methods: {
            ...mapActions(['intialiseStoreFromLS']),
            ...mapMutations(['setSearchQuery']),
            submitSearchQuery() {
                this.setSearchQuery(this.searchQuery);
                this.$router.push({ name: "search", params: {id:this.searchQuery}, query: {searchString: this.searchQuery} })
            },
            showModal (e, category) {
                this.selectedCategory = category
                this.updateModalPosition(e)
            },
            hideModal () {
                this.$refs.modal.style.display = 'none'
            },
            updateModalPosition (e) {
                this.$refs.modal.style.display = 'flex';
                this.$refs.modal.style.top = '40px';
                if (this.selectedCategory) {
                    this.$refs.modal.style.left = `${e.pageX - Math.floor(e.target.offsetWidth/2) - 20}px`
                } 
                else {
                    this.$refs.modal.style.left = `${e.pageX - Math.floor(e.target.offsetWidth/2) - 195}px`
                }  
            },
            toggleBadge (val) {
                this.$refs.itemInCart && (this.$refs.itemInCart.style.display = val ? 'flex' : 'none')
            },
        },
        mounted () {
            this.intialiseStoreFromLS()
            this.toggleBadge(this.itemsInCartCount)
            this.$refs.itemInCart.style.top = `${this.$refs.cart.offsetTop - 10}px`
            this.$refs.itemInCart.style.left = `${this.$refs.cart.offsetLeft + 13}px`
            window.addEventListener('resize', () => {
                this.$refs.itemInCart.style.top = `${this.$refs.cart.offsetTop - 10}px`
                this.$refs.itemInCart.style.left = `${this.$refs.cart.offsetLeft + 13}px`
            })
        },
        watch: {
            itemsInCartCount: {
            handler (newVal) {
                this.toggleBadge(newVal)
            },
            immediate: true
            }
        }
    }

</script> 
 
 
<style>
    .head-wrapper {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #a7eaea;
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: auto;
    box-shadow: 0px 2px #dcdcdc;
    }
    .logo {
    margin: 0 20px;
    width: 7%;
    align-items: center;
    justify-items: last baseline;
    }
    .logo img {
        max-height: 50px;
        max-width: auto;
        position: relative;
        /* bottom: 20px; */
    }
    .categories {
        display: none;
        z-index: 3;
    }
    .categories div{
        font-weight: 600;
    }
    .search {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .search-icon {
        transform: scale(1.25,1.25);
        color: #add8e6;
    }

    .search-icon:hover {
        color: #008b8b;
    }

    .search input {
        border: none;
        border-bottom: 1px solid #008b8b;
        width: 80%;
        outline: none;
        /* // margin: auto; */
    }
    .right-panel {
    display: flex;
    width: 30%;
    justify-content: space-around;
    }
    .right-panel img {
    height: 25px;
    width: 25px;
    }
    .modal {
    position: absolute;
    margin-top: 10px;
    display: none;
    box-shadow: 0px 3px 5px 0px #f7e3f2;
    background: white;
    z-index: 2;
    min-width: 15%;
    border: 1px solid black;
    max-height: 30%;
    max-width: 40%; 
    }
    .close {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 22px;
    padding: 0 10px;
    }
    .close span {
    cursor: pointer;
    }
    .itemInCart {
    position: absolute;
    right: 100px;
    top: 10px;
    height: 20px;
    width: 20px;
    color: white;
    background: #008b8b;
    border-radius: 50%;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    }

    .notifications .notifications-icon {
        transform: scale(1.5,1.5)
    }

    .cart .cart-icon {
        transform: scale(1.5,1.5)
    }

    .profile .profile-icon {
        transform: scale(1.5,1.5)
    }

    @media only screen and (min-width: 800px) {
    .categories {
        display: flex;
        width: 30%;
        justify-content: start;
        height: 100%;
        align-items: center;	
    }
    .categories div {
        margin: 0 15px;
        color: #008b8b;
    }
    .categories a {
        text-decoration: none;
        color:  #008b8b;
    }
    .categories a:visited {
        color:  #008b8b;
    }
    .right-panel {
        width: 13%;
    }
    }
    
    .notifications {
        color: #add8e6;
    }
    
    .notifications:hover {
        color: #008b8b;
    }
    
    .cart {
        color: #add8e6;
    }
    
    .cart:hover {
        color: #008b8b;
    }
    
    .profile {
        color: #add8e6;
    }
    
    .profile:hover {
        color: #008b8b;
    }
</style> 
