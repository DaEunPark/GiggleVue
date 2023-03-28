<template>
    <div class="card" id="card">
        <div class="card-body" id="body">
            <textarea name="text" id="text" cols="50" rows="5" placeholder="Giggle Giggle😘"></textarea>
        </div>
        <div class="card-footer" id="footer">
            <img src="../assets/image.png" onclick="addImage()" id="addImage" class="icon">
            <img src="../assets/youtube.png" onclick="addYoutube()" id="addYoutube" class="icon">
            <img src="../assets/link.png" onclick="addLink()" id="addLink" class="icon">
            <img src="../assets/statistics.png" onclick="statistics()" id="statistics" class="icon">
            <button class="btn btn-primary btn-mb" @click="submit" id="upload" v-on:click="fnSave" >등록</button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
#card {
    width:  750px;
    height: auto;
    min-height: 200px;
    margin: 5% 25%;
}
#addImage, #addYoutube, #addLink, #statistics {
    width:  23px;
    height: 23px;
    margin:0 0 0 10%;
}
#footer {
    float:  left;
}
#text {
    color:black;
    background-color:    white;
    border: none;
    width:  680px;
}
.card{
    float:  left;
}
#body {
    position:relative;
    margin-left:auto;
}
#upload {
    position:   fixed;
    right: 5%;
    bottom: 3%;
}
</style>
