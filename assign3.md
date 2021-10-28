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
