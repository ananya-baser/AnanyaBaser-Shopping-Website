<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <!-- <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> -->
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
            <!-- <div class="carousel-item active">
                <img class="d-block w-100" src="https://bluejay.com.my/wp-content/uploads/2021/12/Kids-clothes-Hong-Kong-seed.jpg" alt="First slide">
            </div> -->
            <div class="carousel-item active">
                <img class="d-block w-100" src="@/../public/images/women-banner-1.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://cdn.luxe.digital/media/2019/12/16162209/best-men-online-shopping-jcrew-luxe-digital.jpg" alt="Second slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'CarouselTemplate'
    }
</script>

<style>
    .carousel-inner {
        height: 500px;
        border-top: 1px solid #008b8b;
        border-bottom: 1px solid #008b8b;
    }

    .carousel{
        padding-bottom: 10px;
    }
</style>