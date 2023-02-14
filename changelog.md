Changelog
=========

0.6.0 (2023-02-13)
------------------

* Now has a ESM and CommonJS build.
* No longer supports Node 14. Please upgrade to Node 16 or later.


0.5.0 (2022-09-03)
------------------

* Upgraded from `@curveball/core` to `@curveball/kernel`.


0.4.14 (2021-02-18)
-------------------

* Attempting releasing on github packages again (8th attempt).
* No functional changes


0.4.13 (2021-02-18)
-------------------

* Attempting releasing on github packages again (7th attempt).
* No functional changes


0.4.12 (2021-02-18)
-------------------

* Attempting releasing on github packages again (6th attempt).
* No functional changes


0.4.11 (2021-02-18)
-------------------

* Attempting releasing on github packages again (5th attempt).
* No functional changes


0.4.10 (2021-02-18)
-------------------

* Attempting releasing on github packages again (4th attempt).
* No functional changes


0.4.9 (2021-02-18)
------------------

* Attempting releasing on github packages again (3rd attempt).
* No functional changes


0.4.8 (2021-02-18)
------------------

* Attempting releasing on github packages again.
* No functional changes


0.4.7 (2021-02-18)
------------------

* Update all dependencies.
* Release on Github Packages.


0.4.6 (2020-02-05)
------------------

* Major bug fix. 0.4.5 was completely unusable due to the middleware
  attempting to read the body twice.


0.4.5 (2020-01-28)
------------------

* Send 400 Bad Request when the submitted JSON is not valid
* Add test case for when JSON is not valid


0.4.4 (2020-01-05)
------------------

* Allow installation on Curveball 0.10.
* @curveball/core is now a peerDependency.


0.4.3 (2019-09-13)
------------------

* Previous release was a bust. Actually updated to curveball 0.9.0 API

0.4.2 (2019-09-13)
------------------

* Updated to curveball 0.9.0 API


0.4.1 (2019-07-21)
------------------

* Updated to curveball 0.8.6 API

0.4.0 (2018-10-04)
------------------

* Updated to curveball 0.8.0 API.

0.3.0 (2018-10-04)
------------------

* Updated to curveball 0.7.0 API.


0.2.2 (2018-09-05)
------------------

* Fixed bug: Body parsing wasn't awaited.


0.2.1 (2018-09-05)
------------------

* Fixed bug: Forgot to call `next()` for some content-types.


0.2.0 (2018-09-05)
------------------

* Automatically parse HTML forms.
* Updated to latest curveball framework version.


0.1.0 (2018-07-05)
------------------

* Map empty bodies with JSON content-types to `{}`.


0.0.2 (2018-07-01)
------------------

* Updated dependencies


0.0.1 (2018-06-30)
------------------

* First version
