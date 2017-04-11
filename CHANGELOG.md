# 1.0.1

`2017-04-10`

* Upgrade TypeScript version to 2.2.2

* Upgrade Antd version to 2.x

* Fix problems which cause by upgrade TypeScript and Antd

    - Remove typings which create by Typings tools, because TypeScript 2.2.2 support @types/... style and antd dependencies @type/react.

    - Add @types/react in the package.json devDependencies.
