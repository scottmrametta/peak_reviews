const BASE_URL = "http://127.0.0.1:8000/reviews/";
const ADD_REVIEW_API = "http://127.0.0.1:8000/add-review/";
const DELETE_REVIEW_API = "http://127.0.0.1:8000/delete-review/";
const REVIEW_DETAILS_API = "http://127.0.0.1:8000/review-detail/";


const tryCatchFetch = async (url, init = null) => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      let data = await response.json();
      return await data;
    } else {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    alert(e);
    return null;
  }
};


const fetchReviews = async (reviewID) => {
    if (reviewID) {
        return await tryCatchFetch(`${BASE_URL}?author=${reviewID}`);
    } else {
        console.log("no review")
    };
};


const addReview = async (reviewID, reviewData) => {
  try {
    let res = await fetch(`${ADD_REVIEW_API}${reviewID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
    let data = await res.json();
    return data;
  } catch (e) {
    console.log(e)
  };
};

const getReviewDetails = async (reviewID) => {
  let res = await fetch(`${REVIEW_DETAILS_API}${reviewID}`);
  let data = await res.json();
  return data;
}

const deleteReview = async (review_id) => {
  try {
    let res = await fetch(`${DELETE_REVIEW_API}${review_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}


const exportItems = {
  fetchReviews,
  addReview,
  deleteReview,
  getReviewDetails
};

export default exportItems;