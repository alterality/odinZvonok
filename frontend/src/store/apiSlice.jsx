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
const apiSlice = createSlice({
    name: "api",
    initialState: {
        loading: false,
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
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAboutCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAboutCompany.fulfilled, (state, { payload }) => {
                state.loading = false;
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
                state.workStagesIndividual= payload;
            })
            .addCase(getIndividualWorkStages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});

export default apiSlice.reducer;