import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newRequest from '../../utils/newRequest';

// Existing fetchFamilyMembers thunk
export const fetchFamilyMembers = createAsyncThunk('fetchFamilyMembers', async () => {
    const response = await newRequest.get("/family/all");
    return response.data;
});

// New fetchFamilyMembersByUNID thunk
export const fetchFamilyMembersByUNID = createAsyncThunk('fetchFamilyMembersByUNID', async (id) => {
    const response = await newRequest.get(`/family/unid/${id}`);
    return response.data;
});

const familySlice = createSlice({
    name: 'family', // Updated to 'family' for better alignment with the feature
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        // Handle fetchFamilyMembers actions
        builder
            .addCase(fetchFamilyMembers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFamilyMembers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFamilyMembers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.error('Error fetching family members:', action.error.message);
            });

        // Handle fetchFamilyMembersByUNID actions
        builder
            .addCase(fetchFamilyMembersByUNID.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFamilyMembersByUNID.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFamilyMembersByUNID.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                console.error('Error fetching family members by UNID:', action.error.message);
            });
    },
});

export default familySlice.reducer;
