import axios from "axios";

const API = "http://localhost:3000";

//  GET organization
export const getOrganizations = async () => {
  const res = await axios.get(`${API}/api/organization`, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });

  return res.data.organizations;
};

// DELETE organization
export const deleteOrg = async (orgId) => {
	try {
		const response = await axios.delete(
			`${API}/delete_organization`,
			{
				data: {
					organizationId: orgId,
				},
				headers: {
					token: localStorage.getItem("token"),
				},
			},
		);

		alert("Org deleted. ");
	} catch (error) {
		console.log("Delete Org failed", error);
		alert("Something went wrong.");
	}
}

// ADD member to organization
export const addMember = async (orgId, memUserUsername) => {
	try {
		const response = await axios.post(
			`${API}/add-mem-to-organization`,
			{
				organizationId: orgId,
				memUserUsername,
			},
			{
				headers: {
					token: localStorage.getItem("token"),
				},
			},
		);

		return response.data;

	} catch (error) {
		console.log("Add Member failed", error);
		alert("Something went wrong.");
	}
}

// REMOVE member to organization
export const removeMember = async(memberId, memUsername, orgId) => {

	const organizationId = orgId;
	const memUserUsername = memUsername;

	try {
		const response = await axios.delete(
			`${API}/delete_members`,
			{
				data: {
					organizationId: organizationId,
					memUserUsername: memUserUsername,
				},
				headers: {
					token: localStorage.getItem("token"),
				},
			},
		);

		alert("Deleted member.");
	} catch (error) {
		console.log("Delete Member failed", error);
		alert("Something went wrong.");
	}
}

// ADD organization
export const addOrg = async(title, description) => {
	if (!title || !description) {
		alert("Fill all fields");
		return;
	}

	try {
		const response = await axios.post(
			`${API}/add_organization`,
			{ title, description },
			{
				headers: {
					token: localStorage.getItem("token"),
				},
			},
		);

		alert("Adding new Organization.");
	} catch (error) {
		console.log("Add Org failed", error);
		alert("Something went wrong.");
	}
}