<template>
    <div class="my-5 text-5xl font-bold text-center text-white">Register</div>
    <div class="flex flex-wrap mt-5  justify-content-center align-items-center">
        <div class="grid w-6">
            <div class="col-6">
                <span class="p-float-label">
                    <InputText id="username" v-model="dataRegister.fullName" />
                    <label for="username">FullName</label>
                </span>
            </div>
            <div class="col-6">
                <span class="p-float-label">
                    <InputText id="username" v-model="dataRegister.companyName" />
                    <label for="username">Company Name</label>
                </span>
            </div>
            <div class="col-6">
                <span class="p-float-label">
                    <InputText id="username" v-model="dataRegister.jobTitle" />
                    <label for="username">Job title</label>
                </span>
            </div>
            <div class="col-6">
                <span class="p-float-label">
                    <InputText id="username" v-model="dataRegister.emailAddress" />
                    <label for="username">Email Address</label>
                </span>
            </div>
            <div class="col-6">
                <span class="p-float-label">
                    <Dropdown @change="selectCity" v-model="dataRegister.selectedCountry" :options="country" optionLabel="countryName" placeholder="Select a Country" class="w-full md:w-14rem" />
                    <label for="username">Country</label>
                </span>
            </div>
            <div class="col-6">
                <span class="p-float-label">
                    <Dropdown :disabled="dataRegister.selectedCountry === ''" v-model="dataRegister.selectedCity" :options="cityList" optionLabel="cityName" placeholder="Select a City" class="w-full md:w-14rem" />
                    <label for="username">city</label>
                </span>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap justify-content-center mt-3">
        <Button label="Submit" @click="submit"/>
    </div>
    <Dialog v-model:visible="visible" modal header="Data Regsiter" :style="{ width: '50vw' }">
        <div class="grid" v-for="(val, key, i) in dataRegister" :key="i">
            <div class="col-4">{{ key }}</div><div class="col-8">{{ val }}</div>
        </div>
    </Dialog>
</template>
<script setup>
const visible = ref(false)
const dataRegister = reactive({
    fullName: "",
    companyName: "",
    jobTitle: "",
    emailAddress: "",
    selectedCountry: "",
    selectedCity: ""
})
const cityList = ref([])
const country = ref([
  {
    countryName: "Malaysia",
    countryCode: "MYS"
  },
  {
    countryName: "Singapore",
    countryCode: "SIN"
  },
  {
    countryName: "Indonesia",
    countryCode: "IDN"
  },
  {
    countryName: "India",
    countryCode: "NDI"
  }
])

const cities = ref([
  {
    cityName: "Kuala Lumpur",
    cityCode: "KLU",
    countryCode: "MYS"
  },
  {
    cityName: "Jaipur",
    cityCode: "JIP",
    countryCode: "NDI"
  },
  {
    cityName: "Jakarta",
    cityCode: "JKT",
    countryCode: "IDN"
  },
  {
    cityName: "Penang",
    cityCode: "PEN",
    countryCode: "MYS"
  },
  {
    cityName: "Bandung",
    cityCode: "BDO",
    countryCode: "IDN"
  }
])

const selectCity = () => {
    cityList.value = []
    console.log("change running")
    const city  = cities.value.find(item => item.countryCode === dataRegister.selectedCountry.countryCode)

    cityList.value.push(city)

}

const submit = () => {
    dataRegister.selectedCity = dataRegister.selectedCity.cityName
    dataRegister.selectedCountry = dataRegister.selectedCountry.countryName
    visible.value = true

    console.log(dataRegister)
}
</script>