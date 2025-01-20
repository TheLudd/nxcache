## nx cache

This repository highlights a bug in nx with false cache positives.

In the nx workflow, code is generated for module core through the tool
generator. Module top then depends on the generated code and uses it in a test.
Nx is set up to run generate for all dependencies before running test. When the
code for the generator changes, nx invalidates the generate task. The test task
that is dependent on the generated code is not invalidated however.

To reproduce the bug:

    * check out the master branch
    * run pnpm install
    * run pnpm test
    * checkout the branch bug
    * run pnpm test again

Expected result: On the bug branch the test should always fail.

Actual result: A fasle cache positive causes the test to pass on the bug branch.
