'use strict'

const runSequence = require('run-sequence')

module.exports = (gulp, done) => {
  gulp.task('release:pre-build:browser', (done1) => {
    runSequence.use(gulp)(
      'lint',
      'test:browser',
      done1
    )
  })

  runSequence.use(gulp)(
    'release:pre-build:browser',
    'build:browser',
    'release:post-build',
    done
  )
}
