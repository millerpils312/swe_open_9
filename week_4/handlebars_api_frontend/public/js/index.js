/**
 * Delete a restaurant
 *
 */
async function deleteRestaurant(id) {
  const response = await fetch(`http://localhost:3001/api/restaurants/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    window.location.reload();
  }
}

/**
 * Updates a restaurant via a put request
 *
 */
async function updateRestaurant(event) {
  // prevent the form from submitting
  event.preventDefault();

  // get the form html
  const form = event.target;

  // build the data object
  const data = {
    id: form.restaurantId.value,
    name: form.name.value,
    imagelink: form.imagelink.value,
  };

  const response = await fetch(
    `http://localhost:3001/api/restaurants/${data.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (response.ok) {
    window.location = '/restaurants';
  }
}
