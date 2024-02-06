import React, { useState } from "react";


const Formdata = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    postalcode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("finally printing the value of form data");
    console.log(formData);
  }

  return (
    <>

      <div class="bg-slate-500 ">
        {/* <h1 class="text-center font-bold text-3xl mb-3 mt-16">Form Data</h1> */}
        <div className="w-full md:max-w-[50%] mx-auto shadow p-8  bg-slate-100 ">
          <form className="space-y-2 flex flex-col" onSubmit={submitHandler}>
            <label htmlFor="firstName">First Name</label>
            <input
              class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter the First Name"
              value={formData.firstName}
              onChange={changeHandler}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter the Last Name"
              value={formData.lastName}
              onChange={changeHandler}
            />

            <label htmlFor="Email Adress">Email</label>
            <input
              class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              type="email"
              id="Email Adress"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={changeHandler}
            />

            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              onChange={changeHandler}
              value={formData.country}
            >
              <option>India</option>
              <option>United State</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>

            <label htmlFor="city">City</label>
            <input
              class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={changeHandler}
            />

            <label htmlFor="address">Street address</label>
            <input
              class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={changeHandler}
            />

            <label htmlFor="state">Enter State</label>
            <input
              class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              type="text"
              id="state"
              name="state"
              placeholder="Enter state"
              value={formData.state}
              onChange={changeHandler}
            />

            <label htmlFor="postalcode">Postal Code</label>
            <input
              class="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
              type="text"
              id="postalcode"
              name="postalcode"
              placeholder="Enter postalcode"
              value={formData.postalcode}
              onChange={changeHandler}
            />

            <div>
              <div class="text-sm font-semibold leading-6 text-gray-900">
                By Email
              </div>
              <div class="mt-4 space-y-2">
                <div class="flex">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      name="comments"
                      id="comments"
                      class="h-4 w-4 rounded"
                      value={formData.comments}
                      onChange={changeHandler}
                    />
                  </div>

                  <div class="ml-3 text-sm leading-6">
                    <label htmlFor="comments" class="font-medium text-gray-900">
                      Comments
                    </label>
                    <p class="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      name="candidates"
                      id="candidates"
                      class="h-4 w-4 rounded"
                      value={formData.candidates}
                      onChange={changeHandler}
                    />
                  </div>

                  <div class="ml-3 text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      class="font-medium text-gray-900"
                    >
                      Candidates
                    </label>
                    <p class="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      name="offers"
                      id="offers"
                      class="h-4 w-4 rounded"
                      onChange={changeHandler}
                      value={formData.offers}
                    />
                  </div>

                  <div class="ml-3 text-sm leading-6">
                    <label htmlFor="offers" class="font-medium text-gray-900">
                      Offers
                    </label>
                    <p class="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="contents text-sm font-semibold leading-6 text-gray-900">
                Push Notifications
              </div>
              <p class="text-sm text-gray-500">
                These are delivered via SMS to your mobile phone.
              </p>

              <div class="mt-4 space-y-2">
                <div class="flex items-center">
                  <input
                    type="radio"
                    id="pushEverything"
                    name="pushNotifications"
                    class="h-4 w-4"
                    value="Everything"
                    onChange={changeHandler}
                  />
                  <label
                    htmlFor="pushEverything"
                    class="ml-3 text-sm font-medium leading-6 text-gray-900"
                  >
                    Everything
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    id="pushEmail"
                    name="pushNotifications"
                    class="h-4 w-4"
                    value="Same as email"
                    onChange={changeHandler}
                  />
                  <label
                    htmlFor="pushEverything"
                    class="ml-3 text-sm font-medium leading-6 text-gray-900"
                  >
                    Same as email
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    type="radio"
                    id="pushNothing"
                    name="pushNotifications"
                    class="h-4 w-4"
                    value="No Push Notifications"
                    onChange={changeHandler}
                  />
                  <label
                    htmlFor="pushEverything"
                    class="ml-3 text-sm font-medium leading-6 text-gray-900"
                  >
                    No Push Notifications
                  </label>
                </div>
              </div>
            </div>

            <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formdata;
