# 1.0.2

`2017-04-12`

* Support Sass and Less
* fix bug:

    - Remove `postcss-modules-local-by-default` plugin from /webpack/posscss.js to resolve the problem that the `postcss-modules-local-by-default` plugin cause classname turn to a random code when webpack compile finished.


# 1.0.1

`2017-04-10`

* Upgrade TypeScript version to 2.2.2

* Upgrade Antd version to 2.x

* Fix problems which cause by upgrade TypeScript and Antd

    - Remove typings which create by Typings tools, because TypeScript 2.2.2 support @types/... style and antd dependencies @type/react.

    - Add @types/react in the package.json devDependencies.
