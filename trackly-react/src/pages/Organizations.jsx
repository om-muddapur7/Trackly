import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import "../styles/organization.css";

const Organization = () => {
	const [orgs, setOrgs] = useState([]);

	useEffect(() => {
		const fetchOrgs = async () => {
			try {
				const res = await axios.get("http://localhost:3000/api/organization", {
					headers: {
						token: localStorage.getItem("token"),
					},
				});

				setOrgs(res.data.organizations || []);

				console.log(res.data);
			} catch (error) {
				console.log("Fetch Org's failed", error);
				alert("Something went wrong.");
			}
		};

		fetchOrgs();
	}, []);

	return (
		<>
        <Navbar />
			<div className="container">
				<h1 id="title">Organizations</h1>

				{!orgs || orgs.length === 0 ? (
					<p>No organizations found</p>
				) : (
					<div className="cards" id="cards">
						{orgs.map((org, index) => (
							<div className="org-card" onclick="openOrg('${org[i].id}')">
								<div className="card-header">Organization {index+1}</div>

								<div className="card-body">
									<h3>
										<b>Title:</b> {org.title}
									</h3>
									<h3>
										<b>Description:</b> {org.description}
									</h3>
									<h3>
										<b>Admin ID:</b> {org.admin}
									</h3>
									<h3>
										<b>Members: </b>
									</h3>
									<ul>
										{org.members.map((m) => (
											<li key={m.id} data-id={m.id}>
												{m.username}
												<button
													onClick={(e) => {
														e.stopPropagation();
														removeMember(m.id, m.username, org.id);
													}}
												>
													Remove
												</button>
											</li>
										))}
									</ul>

									<button
										onClick={(e) => {
											e.stopPropagation();
											addMember(org.id);
										}}
										id="addMembtn"
									>
										Add members
									</button>
									<button
										onClick={(e) => {
											e.stopPropagation();
											deleteOrg(org.id);
										}}
										id="delOrgbtn"
									>
										Delete organization
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

		</>
	);
};

export default Organization;
