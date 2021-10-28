<!-- This will be posted on https://web.stanford.edu/class/cs253/assign3 -->

## Assignment 3 – Somebody's Always Watching 👁️

- **Points:** 63
- **Due:** Friday, November 12 at 5:00pm

Welcome to Assignment 3 for [CS 253: Web Security](https://cs253.stanford.edu). ✨

## Prepare

### Check your Node.js version

You should already have Node.js installed from previous assignments. For this assignment, it's highly recommended to use Node.js 16. Open your terminal and run this command to confirm you're running some version 16.x.x:

```sh
node --version
```

If not, you can install [Node.js](https://nodejs.org/en/) from the official site.

### Get the starter code

Run this command to clone the code with `git`:

```sh
git clone https://github.com/stanford-web-security/assign3.git
```

Enter the folder you just created:

```sh
cd assign3
```

Install the necessary local dependencies with `npm`:

```sh
npm install
```

### Start the assignment

Run the local server:

```sh
npm start
```

Your browser should open up to [http://localhost:4001/](http://localhost:4001/) where you can begin the assignment.

## Coding Portion (36 points)

### Instructions

Your goal is to implement a fingerprinting technique in ```fingerprint.js``` that generates a unique identifier for a user across multiple browsing sessions. Your fingerprinting method will be executed on the client side and will have full access to the DOM, including the ambient window, document, and navigator objects. 

The return value of your fingerprint function will be a string, which will likely be a hash of several fingerprinting vectors.

The only coding file you will need to modify for this assignment is ```fingerprint.js```, where you will implement your fingerprinting technique. You are also allowed to extend the server-side code (in ```index.js```) to provide information on HTTP headers and other such things to ```fingerprint.js```. Feel free to use the hashing function we provide in ```hash.js```. To view the behavior of your implementation in ```fingerprint.js```, we also provide a simple webpage in ```index.html```which you can open in your browser by running ```npm start``` in your terminal and navigating to ```localhost:4000```. Choose one browser among Google Chrome, Mozilla Firefox, Safari, or Brave. 

**TIP**: Turn off ad-blockers in your browser, as these may block some of your intended behavior.

### Grading

The following percentages are awarded if the corresponding criteria for the return value of ```fingerprint.js``` are met. 

40%: return the same identifier when opening the provided HTML page, closing the tab, opening a new tab, and browsing to the page again (in the latest stable version of a browser: ).

30%: return different identifiers for a different browser you didn't use earlier as a proxy for different users.

20%: return the same identifier even after the clearing browser data (e.g. cookies, cache, localStorage, etc.) in the browser's settings.

10%: if navigator.userAgent is the only technique used.

EXTRA CREDIT:

5%: fingerprinting works in incognito/private browser mode.

5%: return the same identifier even after the clearing browser data (in one additional browser). For this portion, choose a browser you didn't use earlier: one of Chrome, Mozilla Firefox, Safari, or Brave.


## Short Answer Questions (24 points)

Your answers should be concise. Each answer should not exceed 300 words. Include your answers in REPORT.md.

1. What fingerprinting methods did you use? Why did you choose them?

2. What limitations does your fingerprinting implementation currently have? In what situations would the fingerprinting fail?

3. Suppose you are working on a privacy-preserving web browser. Describe ONE way to defend against your fingerprinting methods (or explain why your method is unable to be defended against).

   Analyze the _costs_ of your proposed mitigation strategy, in terms of performance, user experience, and web compatibility.

4. Choose ONE of the following browser anti-fingerprinting initiatives. Do they defend against your fingerprinting methods? If so, how could you modify your fingerprinting methods to continue to work despite those new policies?

    * Brave: [Fingerprinting Protections][brave]
    * Chromium: [Intent to Deprecate and Freeze: The User-Agent string][chromium-ua]
    * WebKit (Safari): [Tracking Prevention in WebKit § Anti Fingerprinting][webkit]

## Survey (3 points)
Your feedback matters a lot! Please help us improve by answering the survey questions in SURVEY.md. As a reward, enjoy some easy points!

## Submit

### Before you submit

Ensure that the sanity tests pass:

```sh
npm test
```

This command just runs a basic sanity test that ensures your project passes `npm run lint`. If `npm test` doesn't report any errors that doesn't necessarily mean that you've solved every exercise perfectly!

**🌟 PRO TIP: You can automatically fix most lint errors by running:**

```sh
npm run lint-fix
```

### Gradescope

We'll use [Gradescope](https://gradescope.com/) for submissions. 

### The moment of truth

When you're ready to submit your work, you'll upload three files to Gradescope: `fingerprint.js`, `REPORT.md`, and `SURVEY.md`. 

You should submit early and often! There's no downside to repeatedly submitting your assignment.

## Resources

In addition to the lecture slides from this class, you can use the two references below to get a better idea of common fingerprinting vectors.

 * Electronic Frontier Foundation: [Cover Your Tracks][eff]
 * INRIA: [AmIUnique Project][inria]

[brave]: https://github.com/brave/brave-browser/wiki/Fingerprinting-Protections
[chromium-ua]: https://groups.google.com/a/chromium.org/g/blink-dev/c/-2JIRNMWJ7s/m/yHe4tQNLCgAJ
[webkit]: https://webkit.org/tracking-prevention/#anti-fingerprinting
[eff]: https://coveryourtracks.eff.org/
[inria]: https://amiunique.org/fp
