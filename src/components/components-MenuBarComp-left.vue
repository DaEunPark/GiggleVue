<template>
<div class="logo"  style="text-align:center;">
<img src="../assets/Glogo.png" alt="logo" width="200" height="120" >

<div class="bg-light sticky-top" id="menubar" style="text-align: center; border-radius: 2rem;">
    <a href="#" class="align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <br>
    <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" alt="user_image" width="120" height="120" class="rounded-circle align-center" >
    <!-- <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> -->
    <br><span class="fs-4">USER</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto" style="text-align: left;">
    <li class="nav-item">
        <!-- <a href="/main/mainhome" class="nav-link active" aria-current="page"> -->
        <router-link to="mainhome" class="nav-link active" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg>
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
        Home
        </router-link>
        <!-- </a> -->
    </li>
    <li>
        <!-- <a href="#" class="nav-link link-dark"> -->
        <router-link to="#" class="nav-link link-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg>
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
        Notification
        <span class="badge badge-primary" style="border-radius:50%; background-color:#B00D23; ">5</span>
        </router-link>
        <!-- </a> -->
    </li>
    <li>
        <!-- <a href="#" class="nav-link link-dark"> -->
        <router-link to="#" class="nav-link link-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
        <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
        DM
        <span class="badge badge-primary" style="margin-left:59px; border-radius:50%; background-color:#B00D23; ">5</span>
        <!-- </a> -->
        </router-link>
    </li>
    </ul>
    <hr>

    <!-- <div class="dropdown">
    <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
    </a>
    <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
    </ul>
    </div> -->
</div>
</div>
</template>
