# Redland Renovations Testing Documentation

[Live website preview](https://vadimsj.github.io/redland-renovations)

[Github repository](https://github.com/vadimsj/redland-renovations)

### Table of Contents:

- [Main page testing](#main-page-testing)
  - [Lighthouse performance testing](#lighthouse-performance-testing)
  - [Validator testing](#validator-testing)
  - [Accessibility testing](#accessibility-testing)
  - [User story testing](#user-story-testing)
  - [Feature testing](#feature-testing)
  - [Unfixed Bugs](#unfixed-bugs)

- [Thank you page testing](#thank-you-page-testing)
  - [Lighthouse performance testing](#lighthouse-performance-testing-1)
  - [Validator testing](#validator-testing-1)
  - [Accessibility testing](#accessibility-testing-1)

- [Page 404 testing](#page-404-testing)
  - [Lighthouse performance testing](#lighthouse-performance-testing-2)
  - [Validator testing](#validator-testing-2)
  - [Accessibility testing](#accessibility-testing-2)

## Main page testing

### Lighthouse performance testing

### Validator testing 

- HTML [W3C validator](https://validator.w3.org/nu/)
  - No errors were returned. 

  <img src="assets/docs/testing/main-page-tests/w3c-html-main.png" alt="w3c html test result" width="500px">
<br>

- CSS [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  - Test returned 8 errors. These errors are expected and do not affect the performance of the website.
    
    Errors can be sorted into the following 2 categories:

      A. Errors related to the validator not recognizing new CSS properties.

      B. Errors due to the validator being unable to parse the hidden sidebar.

  <img src="assets/docs/testing/main-page-tests/w3css-errors.png" alt="w3c css test result" width="1000px">
<br>

### Accessibility testing

- Wave.webaim [Web Accessibility Evaluation Tool](https://wave.webaim.org/)

  - No errors were returned.

  <img src="assets/docs/testing/main-page-tests/wave-main.png" alt="wave.webaim test result" width="250px">
<br>


### User story testing

### Feature testing

### Unfixed Bugs


## Thank you page testing

### Lighthouse performance testing

### Validator testing 

- HTML [W3C validator](https://validator.w3.org/nu/)

  - No errors were returned. 

  <img src="assets/docs/testing/thankyou-page-tests/w3c-html-thankyou.png" alt="w3c html test result" width="500px">
<br>

### Accessibility testing

- Wave.webaim [Web Accessibility Evaluation Tool](https://wave.webaim.org/)

  - No errors were returned.

  <img src="assets/docs/testing/thankyou-page-tests/wave-test-thankyou.png" alt="wave.webaim test result" width="250px">
<br>


## Page 404 testing

### Lighthouse performance testing

### Validator testing 

- HTML [W3C validator](https://validator.w3.org/nu/)

  - No errors were returned.

  <img src="assets/docs/testing/404-page-tests/w3c-html-page404.png" alt="w3c html test result" width="500px">
<br>

### Accessibility testing

- Wave.webaim [Web Accessibility Evaluation Tool](https://wave.webaim.org/)

  - No errors were returned.

  <img src="assets/docs/testing/404-page-tests/wave-test-page404.png" alt="wave.webaim test result" width="250px">
