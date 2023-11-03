// import { backendUrl } from "./config";

export const makeUnauthenticatedPOSTRequest = async (
  route,
  username,
  email,
  password
) => {
  try {
    const response = await fetch('https://academics.newtonschool.co/api/v1' + route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        projectId: "f104bi07c490",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
        appType: "music",
      }),
    });
    const formatedResponse = await response.json();
    return formatedResponse;
  } catch (error) {
    console.log(error);
  }
};

export const makeAuthenticatedGETRequest = async (route) => {
  const token = getToken();
  // console.log("maheash",token);
  try {
    const response = await fetch('https://academics.newtonschool.co/api/v1' + route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        projectId: "f104bi07c490",
      },
    });
    const formatedResponse = await response.json();
    return formatedResponse;
  } catch (error) {
    console.log(error);
  }
};
export const addSongToFavorites = async (route, songId) => {
  const token = getToken();
  try {
    const response = await fetch('https://academics.newtonschool.co/api/v1' + route, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "f104bi07c490",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "songId": songId }),
    });

    if (!response.ok) {
      throw new Error("Failed to add song to favorites");
    }

    console.log("Song added to favorites successfully");
  } catch (error) {
    console.error("Error adding song to favorites:", error);
  }
};

export const removeSongFromFavorites = async (route, songId) => {
  const token = getToken();
  try {
    const response = await fetch('https://academics.newtonschool.co/api/v1' + route, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: "f104bi07c490",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "songId" : songId }),
    });

    if (!response.ok) {
      throw new Error("Failed to remove song from favorites");
    }

    console.log("Song removed from favorites successfully");
  } catch (error) {
    console.error("Error removing song from favorites:", error);
  }
};

const getToken = () => {
  const accessToken = localStorage.getItem("token");

  return accessToken;
};