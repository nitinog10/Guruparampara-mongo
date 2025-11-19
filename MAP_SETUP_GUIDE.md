<<<<<<< HEAD
# 📍 How to Add Your Exact Clinic Location to the Website

## Method 1: Google Maps Embed (Recommended)

### Step 1: Get Your Google Maps Embed Code
1. Go to [Google Maps](https://maps.google.com)
2. Search for your clinic address or navigate to your exact location
3. Click the **"Share"** button (usually near the search bar)
4. Select the **"Embed a map"** tab
5. Choose your preferred size (Medium recommended)
6. Copy the entire `<iframe>` code

### Step 2: Update Your Website
1. Open `views/index.ejs` file
2. Find line ~183 (the iframe with Google Maps)
3. Replace the `src` attribute with your copied embed URL

**Example:**
```html
<!-- Replace this line -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925..." 

<!-- With your Google Maps embed URL -->
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
```

## Method 2: Using Coordinates (Alternative)

If you know your exact latitude and longitude:

```html
<iframe 
    src="https://www.google.com/maps?q=YOUR_LATITUDE,YOUR_LONGITUDE&output=embed"
    title="Shree Vishva Ayurved Clinic Location"
    loading="lazy"
    allowfullscreen>
</iframe>
```

## Method 3: Using Address Search

```html
<iframe 
    src="https://www.google.com/maps?q=YOUR_FULL_ADDRESS_HERE&output=embed"
    title="Shree Vishva Ayurved Clinic Location"
    loading="lazy"
    allowfullscreen>
</iframe>
```

## Update Contact Information

Also update your contact details in `views/index.ejs`:

1. **Address**: Replace placeholder with your real address
2. **Phone**: Update with your clinic phone number
3. **Email**: Add your clinic email address

**Example:**
```html
<p><strong>Address:</strong> Shree Vishva Ayurved Clinic<br>
123 Medical Street, MP Nagar<br>
Bhopal, Madhya Pradesh - 462011</p>

<p><strong>Phone:</strong> +91-9876543210</p>
<p><strong>Email:</strong> info@shreevishvaayurved.com</p>
```

## Quick Example for Bhopal Area

If your clinic is in a specific area of Bhopal, you can use:

```html
<!-- For MP Nagar area -->
<iframe src="https://www.google.com/maps?q=MP+Nagar+Bhopal&output=embed">

<!-- For Arera Colony area -->
<iframe src="https://www.google.com/maps?q=Arera+Colony+Bhopal&output=embed">

<!-- For New Market area -->
<iframe src="https://www.google.com/maps?q=New+Market+Bhopal&output=embed">
```

## 🎯 Pro Tips:

1. **Test the map**: After updating, check if the map loads correctly
2. **Mobile-friendly**: The map is already responsive
3. **Loading speed**: The map loads lazily for better performance
4. **Accessibility**: Screen readers can access the map title

## Need Help?

If you need assistance:
1. Share your clinic's exact address
2. I can help generate the correct Google Maps embed code
3. Or provide the latitude/longitude coordinates

---

**Next Steps:**
1. Get your Google Maps embed code
2. Update `views/index.ejs` with your real address and map
3. Test the website to ensure everything works
4. Your visitors will now see your exact location!
=======
# 📍 How to Add Your Exact Clinic Location to the Website

## Method 1: Google Maps Embed (Recommended)

### Step 1: Get Your Google Maps Embed Code
1. Go to [Google Maps](https://maps.google.com)
2. Search for your clinic address or navigate to your exact location
3. Click the **"Share"** button (usually near the search bar)
4. Select the **"Embed a map"** tab
5. Choose your preferred size (Medium recommended)
6. Copy the entire `<iframe>` code

### Step 2: Update Your Website
1. Open `views/index.ejs` file
2. Find line ~183 (the iframe with Google Maps)
3. Replace the `src` attribute with your copied embed URL

**Example:**
```html
<!-- Replace this line -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925..." 

<!-- With your Google Maps embed URL -->
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
```

## Method 2: Using Coordinates (Alternative)

If you know your exact latitude and longitude:

```html
<iframe 
    src="https://www.google.com/maps?q=YOUR_LATITUDE,YOUR_LONGITUDE&output=embed"
    title="Shree Vishva Ayurved Clinic Location"
    loading="lazy"
    allowfullscreen>
</iframe>
```

## Method 3: Using Address Search

```html
<iframe 
    src="https://www.google.com/maps?q=YOUR_FULL_ADDRESS_HERE&output=embed"
    title="Shree Vishva Ayurved Clinic Location"
    loading="lazy"
    allowfullscreen>
</iframe>
```

## Update Contact Information

Also update your contact details in `views/index.ejs`:

1. **Address**: Replace placeholder with your real address
2. **Phone**: Update with your clinic phone number
3. **Email**: Add your clinic email address

**Example:**
```html
<p><strong>Address:</strong> Shree Vishva Ayurved Clinic<br>
123 Medical Street, MP Nagar<br>
Bhopal, Madhya Pradesh - 462011</p>

<p><strong>Phone:</strong> +91-9876543210</p>
<p><strong>Email:</strong> info@shreevishvaayurved.com</p>
```

## Quick Example for Bhopal Area

If your clinic is in a specific area of Bhopal, you can use:

```html
<!-- For MP Nagar area -->
<iframe src="https://www.google.com/maps?q=MP+Nagar+Bhopal&output=embed">

<!-- For Arera Colony area -->
<iframe src="https://www.google.com/maps?q=Arera+Colony+Bhopal&output=embed">

<!-- For New Market area -->
<iframe src="https://www.google.com/maps?q=New+Market+Bhopal&output=embed">
```

## 🎯 Pro Tips:

1. **Test the map**: After updating, check if the map loads correctly
2. **Mobile-friendly**: The map is already responsive
3. **Loading speed**: The map loads lazily for better performance
4. **Accessibility**: Screen readers can access the map title

## Need Help?

If you need assistance:
1. Share your clinic's exact address
2. I can help generate the correct Google Maps embed code
3. Or provide the latitude/longitude coordinates

---

**Next Steps:**
1. Get your Google Maps embed code
2. Update `views/index.ejs` with your real address and map
3. Test the website to ensure everything works
4. Your visitors will now see your exact location!
>>>>>>> 0a3a1db6e046d8b0e488c57522dd7cade99a3cb6
