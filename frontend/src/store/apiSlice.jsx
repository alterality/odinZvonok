import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apiUrl = process.env.REACT_APP_API_URL;
export const instance = axios.create({
    baseURL: apiUrl
})
export const getAboutCompany = createAsyncThunk(
    "api/getAboutCompany",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/aboutcompany/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getServices = createAsyncThunk(
    "api/getServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/services/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getVacancies = createAsyncThunk(
    "api/getVacancies",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/vacancies/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getTeam = createAsyncThunk(
    "api/getTeam",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/team/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getAdvantages = createAsyncThunk(
    "api/getAdvantages",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/advantages/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getAssistance = createAsyncThunk(
    "api/getAssistance",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/assistance/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getAssistances = createAsyncThunk(
    "api/getAssistances",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/assistances/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getClients = createAsyncThunk(
    "api/getClients",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/clients/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getDetails = createAsyncThunk(
    "api/getDetails",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/details/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getDocuments = createAsyncThunk(
    "api/getDocuments",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/documents/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getHomeAboutCompany = createAsyncThunk(
    "api/getHomeAboutCompany",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/home-about-company/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getHomeAdvantage = createAsyncThunk(
    "api/getHomeAdvantage",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/home-advantage/4`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

// главная страница вверх
export const getHomePage = createAsyncThunk(
    "api/getHomePage",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/home-page/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getIndividualDocuments = createAsyncThunk(
    "api/getIndividualDocuments",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/individual-documents/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getIndividualEntities = createAsyncThunk(
    "api/getIndividualEntities",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/individual-entities/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getLegalDocuments = createAsyncThunk(
    "api/getLegalDocuments",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/legal-documents/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getLegalEntities = createAsyncThunk(
    "api/getLegalEntities",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/legal-entities/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getOurServices = createAsyncThunk(
    "api/getOurServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/our-services/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getPartnershipProgram = createAsyncThunk(
    "api/getPartnershipProgram",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/partnership-program/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getWorkStages = createAsyncThunk(
    "api/getWorkStages",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/work-stages/1`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getIndividualAdvantages = createAsyncThunk(
    "api/getIndividualAdvantages",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/advantagesIviduals/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getIndividualWorkStages = createAsyncThunk(
    "api/getIndividualWorkStages",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/work-stagesIndividuals/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getApartmentServices = createAsyncThunk(
    "api/getApartmentServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/apartment-services/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getBusinessServices = createAsyncThunk(
    "api/getBusinessServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/business-services/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getAdditionalServicesInformation = createAsyncThunk(
    "api/getAdditionalServicesInformation",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/additional-services-information/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getCarRepairsInformation = createAsyncThunk(
    "api/getCarRepairsInformation",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/car-repairs-information/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getCargoTransportation = createAsyncThunk(
    "api/getCargoTransportation",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/cargo-transportation/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getCleaning = createAsyncThunk(
    "api/getCleaning",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/cleaning/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getClimbers = createAsyncThunk(
    "api/getClimbers",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/climbers/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getMinorRepairs = createAsyncThunk(
    "api/getMinorRepairs",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/minor-repairs/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getHouseServices = createAsyncThunk(
    "api/getHouseServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/house-services/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const postApplication = createAsyncThunk(
    "api/postApplication",
    async function (application, { rejectWithValue }) {
        try {
            const response = await instance.post(`/application/`, application);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const postBusinessApplication = createAsyncThunk(
    "api/postBusinessApplication",
    async function (application, { rejectWithValue }) {
        try {
            const response = await instance.post(
                `/business-application/`,
                application, // Send the application object directly
            );

            return response.data;
        } catch (error) {
            console.error(error);
            console.log(application);
            return rejectWithValue(error.message);
        }
    }
);

export const getCapRepairsTitle = createAsyncThunk(
    "api/getCapRepairsTitle",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/cap-repairs-title/1`,);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getFloorWorkCapServices = createAsyncThunk(
    "api/getFloorWorkCapServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/floor-work-cap-services/1`,);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getWallWorkCapServices = createAsyncThunk(
    "api/getWallWorkCapServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/wall-work-cap-services/1`,);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getTilingWorkCapServices = createAsyncThunk(
    "api/getTilingWorkCapServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/tiling-work-cap-services/1`,);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getPlumbingWorkCapServices = createAsyncThunk(
    "api/getPlumbingWorkCapServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/plumbing-work-cap-services/1`,);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getDismantlingWorkCapServices = createAsyncThunk(
    "api/getDismantlingWorkCapServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/dismantling-work-cap-services/1`,);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getElectricalWorkCapServices = createAsyncThunk(
    "api/getElectricalWorkCapServices",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/electrical-work-cap-services/1`,);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);



const apiSlice = createSlice({
    name: "api",
    initialState: {
        loading: false,
        isLoaded: false,
        error: null,
        aboutCompany: [],
        services: [],
        vacancies: [],
        team: [],
        advantages: [],
        assistance: [],
        assistances: [],
        clients: [],
        details: [],
        documents: [],
        homeAboutCompany: [],
        homeAdvantage: [],
        homePage: [],
        individualDocuments: [],
        individualEntities: [],
        legalDocuments: [],
        legalEntities: [],
        ourServices: [],
        partnershipProgram: [],
        workStages: [],
        advantagesIvidual: [],
        workStagesIndividual:[],
        additionalServicesInformation: [],
        apartmentServices:[],
        businessServices: [],
        carRepairsInformation: [],
        cargoTransportation: [],
        cleaning: [],
        climbers: [],
        minorRepairs: [],
        houseServices:[],
        capRepairsTitle:[],
        floorWorkCapServices: [],
        wallWorkCapServices:[],
        tilingWorkCapServices:[],
        plumbingWorkCapServices: [],
        dismantlingWorkCapServices: [],
        electricalWorkCapServices: [],
    },
    reducers: {
        resetIsLoaded: (state) => {
            state.isLoaded = false
        },
        isLoadedTrue: (state) =>{
            state.isLoaded = true
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(getAboutCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAboutCompany.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.aboutCompany = payload;
            })
            .addCase(getAboutCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.services = payload;
            })
            .addCase(getServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getVacancies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVacancies.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.vacancies = payload;
            })
            .addCase(getVacancies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getTeam.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTeam.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.team = payload;
            })
            .addCase(getTeam.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAdvantages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAdvantages.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.advantages = payload;
            })
            .addCase(getAdvantages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAssistance.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAssistance.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.assistance = payload;
            })
            .addCase(getAssistance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAssistances.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAssistances.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.assistances = payload;
            })
            .addCase(getAssistances.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getClients.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getClients.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.clients = payload;
            })
            .addCase(getClients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDetails.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.details = payload;
            })
            .addCase(getDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getDocuments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDocuments.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.documents = payload;
            })
            .addCase(getDocuments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getHomeAboutCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHomeAboutCompany.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.homeAboutCompany = payload;
            })
            .addCase(getHomeAboutCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getHomeAdvantage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHomeAdvantage.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.homeAdvantage = payload;
            })
            .addCase(getHomeAdvantage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getHomePage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHomePage.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.homePage = payload;
            })
            .addCase(getHomePage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getIndividualDocuments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getIndividualDocuments.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.individualDocuments = payload;
            })
            .addCase(getIndividualDocuments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getIndividualEntities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getIndividualEntities.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.individualEntities = payload;
            })
            .addCase(getIndividualEntities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getLegalDocuments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLegalDocuments.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.legalDocuments= payload;
            })
            .addCase(getLegalDocuments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getLegalEntities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLegalEntities.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.legalEntities= payload;
            })
            .addCase(getLegalEntities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getOurServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOurServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.ourServices= payload;
            })
            .addCase(getOurServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getPartnershipProgram.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPartnershipProgram.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.partnershipProgram= payload;
            })
            .addCase(getPartnershipProgram.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getWorkStages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getWorkStages.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.workStages= payload;
            })
            .addCase(getWorkStages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getIndividualAdvantages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getIndividualAdvantages.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.advantagesIvidual= payload;
            })
            .addCase(getIndividualAdvantages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getIndividualWorkStages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getIndividualWorkStages.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.workStagesIndividual= payload;
            })
            .addCase(getIndividualWorkStages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAdditionalServicesInformation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAdditionalServicesInformation.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.additionalServicesInformation= payload;
            })
            .addCase(getAdditionalServicesInformation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getApartmentServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getApartmentServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.apartmentServices= payload;
            })
            .addCase(getApartmentServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getBusinessServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBusinessServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.businessServices= payload;
            })
            .addCase(getBusinessServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCarRepairsInformation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCarRepairsInformation.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.carRepairsInformaion= payload;
            })
            .addCase(getCarRepairsInformation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCargoTransportation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCargoTransportation.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.cargoTransportation= payload;
            })
            .addCase(getCargoTransportation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCleaning.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCleaning.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.cleaning= payload;
            })
            .addCase(getCleaning.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getClimbers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getClimbers.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.climbers= payload;
            })
            .addCase(getClimbers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getMinorRepairs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMinorRepairs.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.minorRepairs= payload;
            })
            .addCase(getMinorRepairs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getHouseServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHouseServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.houseServices= payload;
            })
            .addCase(getHouseServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(postApplication.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postApplication.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(postApplication.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(postBusinessApplication.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postBusinessApplication.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(postBusinessApplication.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCapRepairsTitle.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCapRepairsTitle.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.capRepairsTitle = payload;
            })
            .addCase(getCapRepairsTitle.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getFloorWorkCapServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFloorWorkCapServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.floorWorkCapServices = payload;
            })
            .addCase(getFloorWorkCapServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getWallWorkCapServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getWallWorkCapServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.wallWorkCapServices = payload;
            })
            .addCase(getWallWorkCapServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getTilingWorkCapServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTilingWorkCapServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.tilingWorkCapServices = payload;
            })
            .addCase(getTilingWorkCapServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getPlumbingWorkCapServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPlumbingWorkCapServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.plumbingWorkCapServices = payload;
            })
            .addCase(getPlumbingWorkCapServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getDismantlingWorkCapServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDismantlingWorkCapServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.dismantlingWorkCapServices = payload;
            })
            .addCase(getDismantlingWorkCapServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getElectricalWorkCapServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getElectricalWorkCapServices.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLoaded = true
                state.electricalWorkCapServices = payload;
            })
            .addCase(getElectricalWorkCapServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


    },
});

export default apiSlice.reducer;
export const {resetIsLoaded, isLoadedTrue} = apiSlice.actions