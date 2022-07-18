
const URL = 'http://localhost:9002';

export const signUpUser = async (userData) => {
    const response = await fetch(`${URL}/user/signup`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
             "Content-Type": "application/json"
            }
        })
    const data = await response.json()
    console.log('something', data);
    return data
};

export const signInUser = async (userData) => {
    const response = await fetch(`${URL}/user/signin`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('myToken')}`
        }
    })
    const data = await response.json()
    return data
}