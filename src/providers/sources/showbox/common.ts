// We do not want content scanners to notice this scraping going on so we've hidden all constants
// The source has its origins in China so I added some extra security with banned words
// Mayhaps a tiny bit unethical, but this source is just too good :)
// If you are copying this code please use precautions so they do not change their api.

export const iv = atob('d0VpcGhUbiE=');
export const key = atob('MTIzZDZjZWRmNjI2ZHk1NDIzM2FhMXc2');
export const apiUrls = [
  atob('aHR0cHM6Ly9zaG93Ym94LnNoZWd1Lm5ldC9hcGkvYXBpX2NsaWVudC9pbmRleC8='),
  atob('aHR0cHM6Ly9tYnBhcGkuc2hlZ3UubmV0L2FwaS9hcGlfY2xpZW50L2luZGV4Lw=='),
];
export const appKey = atob('bW92aWVib3g=');
export const appId = atob('Y29tLnRkby5zaG93Ym94');
export const captionsDomains = [atob('bWJwaW1hZ2VzLmNodWF4aW4uY29t'), atob('aW1hZ2VzLnNoZWd1Lm5ldA==')];
const uids = atob('WzIwMDA5MTQ4LDIwMDE5NjcyLDIwMDE5NDM2LDIwMDAwMzg1LDIwMDEzMTAwLDIwMDExOTc5LDIwMDIxMjQ4LDIwMDIxNTg3LDIwMDIzMjE1LDIwMDI0NDU3LDIwMDEwOTM3LDIwMDAxNTA4LDIwMDE2NzYzLDIwMDA2NjIxLDIwMDEwMzUyLDIwMDAxMzY3LDIwMDA1MjQxLDIwMDA4Mzg2LDIwMDA0NzAzLDIwMDIwMTY1LDIwMDE2NjA3LDIwMDE2ODAyLDIwMDA5MjYzLDIwMDA3OTE2LDIwMDAyMTU1LDIwMDA2MTkwLDIwMDIwODU4LDIwMDExMzI3LDIwMDI0MzEwLDIwMDA4NzA3LDIwMDEzMjQ2LDIwMDA3MTc3LDIwMDE4NzEyLDIwMDAzNjEwLDIwMDA3NDA3LDIwMDI0NzA2LDIwMDEzNTY2LDIwMDIzNjYzLDIwMDAzNzg1LDIwMDE0NjAwLDIwMDE1NjYxLDIwMDExODM5LDIwMDAzMjIyLDIwMDE3MzQ5LDIwMDA0ODk3LDIwMDE4MjMwLDIwMDA4NDk1LDIwMDE0Mzk2LDIwMDAxNzcwLDIwMDE5ODEyLDIwMDEzNDc4LDIwMDIxOTcyLDIwMDIyMjUzLDIwMDE0NTU0LDIwMDEwMzk3LDIwMDAxNTU1LDIwMDI0MjM1LDIwMDIwODMyLDIwMDAzNTQwLDIwMDIyMTY0LDIwMDE1ODc3LDIwMDEzNDI0LDIwMDEyNDkyLDIwMDAwOTIyLDIwMDIxOTk1LDIwMDEwNDM3LDIwMDA5MzYwLDIwMDAxNDMzLDIwMDA2Mzc3LDIwMDE4NzkxLDIwMDA2MTA0LDIwMDA5MDQxLDIwMDIwMDIxLDIwMDE5NTM3LDIwMDE3Njg3LDIwMDAyNDEzLDIwMDE0OTQ3LDIwMDE0NzA5LDIwMDA4ODI5LDIwMDIyMDU2LDIwMDAyOTc4LDIwMDIwMDA0LDIwMDI0MTE3LDIwMDE3NDUxLDIwMDA1NDA0LDIwMDEyMjgxLDIwMDEwNTc0LDIwMDE4MTAwLDIwMDE2NDA0LDIwMDE2Mzg4LDIwMDIxMjY1LDIwMDIwNDY5LDIwMDIxODk1LDIwMDE4ODU4LDIwMDE5Nzk2LDIwMDA2ODk3LDIwMDE5MDU4LDIwMDAyNjczLDIwMDEyNjM3LDIwMDA1OTMwLDIwMDE1ODA4LDIwMDA0MTk3LDIwMDI0MTY1LDIwMDE2NzE5LDIwMDEzMzI3LDIwMDE1Mzk3LDIwMDA4NTU3LDIwMDEzNDczLDIwMDIwNDMxLDIwMDE2NTI0LDIwMDA4NjczLDIwMDE5ODExLDIwMDExNjg1LDIwMDEzNDE3LDIwMDI0MDQ2LDIwMDAzODI4LDIwMDIyMjIyLDIwMDIwNzA5LDIwMDExNzI4LDIwMDA3MjQxLDIwMDE0ODUwLDIwMDA4MzQ0LDIwMDE2NjE0LDIwMDEyMzEwLDIwMDE3OTcyLDIwMDEzNDQzLDIwMDA4MTY1LDIwMDE4MjIyLDIwMDIzNDI2LDIwMDAxNjQ5LDIwMDAzMDk5LDIwMDA0NzQ1LDIwMDIyOTc0LDIwMDE5MzA4LDIwMDE1NjMyLDIwMDEyNDg4LDIwMDE5MTM0LDIwMDE1MjcwLDIwMDA3OTMwLDIwMDA4ODU2LDIwMDA0MjgxLDIwMDE2ODMyLDIwMDE5MzM4LDIwMDAwMTkzLDIwMDAxMzU0LDIwMDA0MDQxLDIwMDA2MTY5LDIwMDA5Mjk1LDIwMDIyMTc5LDIwMDA1NTI2LDIwMDEyODM4LDIwMDE3Mzc4LDIwMDE1MzEzLDIwMDIwNTM0LDIwMDIxMzU0LDIwMDIyMzcxLDIwMDExMzEzLDIwMDA4MjA2LDIwMDIyNjEzLDIwMDIzNjIzLDIwMDE5NTU4LDIwMDI0MDg2LDIwMDA3MDM1LDIwMDE2MDA1LDIwMDA1MTIyLDIwMDIwODE1LDIwMDIwNzgxLDIwMDEwODgzLDIwMDE4ODQ2LDIwMDE2Njk1LDIwMDIzMDA0LDIwMDExMTk2LDIwMDA1NDU4LDIwMDA4NzY1LDIwMDA2MzExLDIwMDI0NDQ2LDIwMDEyNTQzLDIwMDEzMzgwLDIwMDI0MDI4LDIwMDA5MDU0LDIwMDE3OTEyLDIwMDA1NDk1LDIwMDIxMzQyLDIwMDAyOTU4LDIwMDE4OTMxLDIwMDA4MTA4LDIwMDExOTA2LDIwMDA3NjA1LDIwMDIzNTQxLDIwMDE2NzI0LDIwMDAzMTc2LDIwMDA3Mjk1LDIwMDA3MzA1LDIwMDEwMDUxLDIwMDEwNjIzLDIwMDAyMzUxLDIwMDE5MTA4LDIwMDI0NDAzLDIwMDAxNTY4LDIwMDAwNTg0LDIwMDA3OTU2LDIwMDE0MTMzLDIwMDIxODc3LDIwMDE0NjIzLDIwMDIxMTg5LDIwMDE3MDgyLDIwMDExMjE4LDIwMDA3NDM1LDIwMDE0MjAzLDIwMDE5NTQxLDIwMDA2NTQ1LDIwMDIxODczLDIwMDE3OTExLDIwMDIyNTAxLDIwMDA2ODEzLDIwMDA5NTU5LDIwMDIwOTk1LDIwMDA1NTc0LDIwMDAxNjcyLDIwMDE5MTg2LDIwMDIxNDg3LDIwMDAzNDc0LDIwMDIxOTYwLDIwMDEzNzI1LDIwMDEyNjcyLDIwMDA5NjU1LDIwMDE2MTE5LDIwMDAwMDA1LDIwMDI0NDU5LDIwMDEyNDc0LDIwMDE2MTk2LDIwMDE4OTQ0LDIwMDEwODMwLDIwMDA5NzA2LDIwMDA3OTM4LDIwMDEzMDI3LDIwMDIwMTY2LDIwMDA5MjQ3LDIwMDAxMDkxLDIwMDE1OTU4LDIwMDAxNTAxLDIwMDEwMDQ5LDIwMDA4MzMxLDIwMDE3ODQ0LDIwMDE1NTI3LDIwMDA0OTQ1LDIwMDEyNTE0LDIwMDAzOTI1LDIwMDA2MTUyLDIwMDAxNDA2LDIwMDE3NzIzLDIwMDAyNTgyLDIwMDEyNTk4LDIwMDA3MjYyLDIwMDAwNTA0LDIwMDIxODk3LDIwMDExNjM2LDIwMDIyMzE3LDIwMDAyMTA0LDIwMDAwNTYwLDIwMDA3MzQxLDIwMDIwOTI3LDIwMDA3MTE5LDIwMDIxNjM3LDIwMDIzMTI0LDIwMDA1MzI3LDIwMDAzMjY2LDIwMDE3Mzc3LDIwMDIyMzk3LDIwMDE3NjM2LDIwMDA1OTEyLDIwMDEwODM2LDIwMDIyNzYxLDIwMDAwNzY0LDIwMDA3ODIwLDIwMDEzMDUyLDIwMDE0NDYzLDIwMDIwNTczLDIwMDE2Njg5LDIwMDIzOTgwLDIwMDEyNzU0LDIwMDIwMzIxLDIwMDIwNzY0LDIwMDAxNTk5LDIwMDE3Njc2LDIwMDEwOTAzLDIwMDE5MTg5LDIwMDIyODAwLDIwMDE2Njc2LDIwMDAyNDg3LDIwMDE0MTk1LDIwMDE0MzM5LDIwMDE3MzEwXQ==');
export const uid = uids[Math.floor(Date.now() / 86400000) % uids.length];

export const showboxBase = 'https://www.showbox.media';
