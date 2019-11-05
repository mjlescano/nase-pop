const INTERVAL = 1000

const WATCH = ['/index.html', '/main.js']

const etags = new Map()

const check = async () => {
  await Promise.all(
    WATCH.map(async (file) => {
      const res = await fetch(file, { method: 'HEAD' })
      const currEtag = res.headers.get('ETag')
      const prevEtag = etags.get(file)

      if (prevEtag === undefined) {
        etags.set(file, currEtag)
      } else if (currEtag !== prevEtag) {
        window.location.reload()
      }
    })
  )

  setTimeout(check, INTERVAL)
}

check()
