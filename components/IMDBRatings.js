const image =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIg%0D%0AaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMzUgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dvLWlt%0D%0AZGI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVm%0D%0Acz48L2RlZnM+CiAgICA8ZyBpZD0iU3R5bGVndWlkZS1wcmVzZW50YXRpb24iIHN0cm9rZT0ibm9u%0D%0AZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAg%0D%0AICAgIDxnIGlkPSI3LkxhYmVscyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Mi4wMDAwMDAsIC04%0D%0AODIuMDAwMDAwKSIgZmlsbD0iIzBBMTAxNCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAg%0D%0AICAgPGcgaWQ9Ijk5OGQ5ZjljNTc5ODczYjFkNzM4NjY4MTIyYTUyMTcwIiB0cmFuc2Zvcm09InRy%0D%0AYW5zbGF0ZSgzOTIuMDAwMDAwLCA4ODIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i%0D%0AR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjUwMDAwMCwgOC40NjM1MDIpIHNjYWxlKC0x%0D%0ALCAxKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTcuNTAwMDAwLCAtOC40NjM1MDIp%0D%0AIHRyYW5zbGF0ZSgwLjAwMDAwMCwgMC45MzQwOTApIj4KICAgICAgICAgICAgICAgICAgICA8cG9s%0D%0AeWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMCA3LjMyNjczNzcyIDAgMC4yMTM2NTgxMzEgMS44NDkz%0D%0AOTE0OCAwLjIxMzY1ODEzMSAzLjY5ODc4Mjk2IDAuMjEzNjU4MTMxIDMuNjk4NzgyOTYgNy4zMjY3%0D%0AMzc3MiAzLjY5ODc4Mjk2IDE0LjQzOTgxNzMgMS44NDkzOTE0OCAxNC40Mzk4MTczIDAgMTQuNDM5%0D%0AODE3MyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjczMjQ1NDM2%0D%0ALDcuMzI2NzM3NzIgTDQuNzMyNDU0MzYsMC4yMTM2NTgxMzEgTDYuMzY0NjA0NDYsMC4yMTM2NTgx%0D%0AMzEgTDcuOTk2Mzk5NTksMC4yMTM2NTgxMzEgTDguMDAxNzI0MTQsNC43OTExODYxNiBDOC4wMDcw%0D%0ANDg2OCw3LjMwNTEyMzg4IDguMDE4MDUyNzQsOS4zMjUxMzIxOCA4LjAyOTA1NjgsOS4yODE1NTAx%0D%0ANyBDOC4wNDAwNjA4NSw5LjIzNzk2ODE3IDguMzMzNjIwNjksNy4yMzQ2MTMxNSA4LjY3NjUyMTMs%0D%0ANC44MjkwOTg5NiBDOS4wMTkwNjY5NCwyLjQyMzU4NDc4IDkuMzEyOTgxNzQsMC40MDM5MzA3OTYg%0D%0AOS4zMjkzMTAzNCwwLjMzODczNDk0OCBDOS4zNTY2NDMsMC4yMTQwMTI0NTcgOS4zNjE5Njc1NSww%0D%0ALjIxNDAxMjQ1NyAxMC40OTg5MzUxLDAuMjE0MDEyNDU3IEMxMS42MzU5MDI2LDAuMjE0MDEyNDU3%0D%0AIDExLjY0MTIyNzIsMC4yMTQwMTI0NTcgMTEuNjYyODgwMywwLjMzODczNDk0OCBDMTEuNjc5MjA4%0D%0AOSwwLjQwMzkzMDc5NiAxMS44NTMxNDQsMS42NTgyNDIyMSAxMi4wNDkwODcyLDMuMTE4NzcwOTMg%0D%0AQzEyLjIzOTM1MDksNC41ODQ5Njg4NiAxMi41MTY5MzcxLDYuNjQ4MjA0ODQgMTIuNjU4MjE1LDcu%0D%0ANzA2OTI4NzIgTDEyLjkxOTQ3MjYsOS42MzQ0NTgxMyBMMTIuOTM1ODAxMiw0LjkyMTIyMzUzIEwx%0D%0AMi45NDY4MDUzLDAuMjEzNjU4MTMxIEwxNC41Njc5NTEzLDAuMjI0NjQyMjE1IEwxNi4xODM0MTc4%0D%0ALDAuMjQwOTQxMTc2IEwxNi4xODM0MTc4LDcuMzI2NzM3NzIgTDE2LjE4MzQxNzgsMTQuNDEyNTM0%0D%0AMyBMMTMuNzc5MjA4OSwxNC40Mjg4MzMyIEwxMS4zNjkzMjA1LDE0LjQzOTgxNzMgTDExLjM0MTk4%0D%0ANzgsMTQuMzIwNDA5NyBDMTEuMzMwOTgzOCwxNC4yNDk4OTkgMTEuMTQ2MDQ0NiwxMi44MjcyODMg%0D%0AMTAuOTM0MTI3OCwxMS4xNTQ4Njc4IEMxMC40NzE2MDI0LDcuNTExMzQxMTggMTAuNTI2MjY3Nyw3%0D%0ALjg3NTIzMzIyIDEwLjQ4NzkzMSw3Ljk3ODM0MTg3IEMxMC40NjYyNzc5LDguMDIxOTIzODggMTAu%0D%0AMjU0MDA2MSw5LjQ3NzEzNzcyIDEwLjAwOTA3NzEsMTEuMjA5MDc5NiBDOS43NjQxNDgwNywxMi45%0D%0ANDEwMjE1IDkuNTUyMjMxMjQsMTQuMzc0NjIxNSA5LjUzNTkwMjY0LDE0LjQwMTU1MDIgQzkuNTI0%0D%0AODk4NTgsMTQuNDIzMTY0IDguNDM2OTE2ODQsMTQuNDM5NDYzIDcuMTIwNjg5NjYsMTQuNDM5NDYz%0D%0AIEw0LjczMjgwOTMzLDE0LjQzOTQ2MyBMNC43MzI4MDkzMyw3LjMyNjczNzcyIEw0LjczMjQ1NDM2%0D%0ALDcuMzI2NzM3NzIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBh%0D%0AdGggZD0iTTE3LjI0NDA2NjksNy4zMjEwNjg1MSBMMTcuMjQ0MDY2OSwwLjIwMjY3NDA0OCBMMjAu%0D%0AMzMzNzIyMSwwLjIyOTk1NzA5MyBDMjMuMDA0NTEzMiwwLjI0NjI1NjA1NSAyMy40NzIzNjMxLDAu%0D%0AMjYyNTU1MDE3IDIzLjgyNTkxMjgsMC4zNDQwNDk4MjcgQzI0Ljg3MDIzMzMsMC41ODI4NjUwNTIg%0D%0AMjUuNDQxMzc5MywxLjEwNDA3NzUxIDI1LjY2OTk3OTcsMi4wMjE3Nzk5MyBDMjUuNzc4OTU1NCwy%0D%0ALjQ3Nzc5NjU0IDI1LjgzODU5MDMsNC4xMDEzMTQ4OCAyNS44MzMyNjU3LDYuOTczODI5NzYgQzI1%0D%0ALjgzMzI2NTcsMTAuMDc5ODQ1IDI1Ljc3MzI3NTksMTEuODExNzg2OSAyNS42NDgzMjY2LDEyLjI4%0D%0ANDEwMjQgQzI1LjM1NDQxMTgsMTMuMzk3MzkyNCAyNC41Mjc2ODc2LDE0LjA2NDk0MTIgMjMuMTg0%0D%0AMTI3OCwxNC4yNzE1MTI4IEMyMi40ODc2Nzc1LDE0LjM3OTkzNjMgMjEuMDUxODI1NiwxNC40Mzk4%0D%0AMTczIDE5LjEzNzExOTcsMTQuNDM5ODE3MyBMMTcuMjQ0MDY2OSwxNC40Mzk4MTczIEwxNy4yNDQw%0D%0ANjY5LDcuMzIxMDY4NTEgWiBNMjEuNzY0MjQ5NSwxMS44NTUwMTQ1IEMyMi4xMDcxNTAxLDExLjY4%0D%0AMTM5NTIgMjIuMTAxNDcwNiwxMS43MDMwMDkgMjIuMTI4ODAzMiw4LjE5NTE4ODkzIEMyMi4xNTA0%0D%0ANTY0LDQuODgyOTU2NCAyMi4xMDE0NzA2LDMuNDIyNDI3NjggMjEuOTYwMTkyNywzLjA3NDgzNDYg%0D%0AQzIxLjg1Njg5NjYsMi44NDEzMzQyNiAyMS42MzM5NzU3LDIuNzEwOTQyNTYgMjEuMjM2NzY0Nywy%0D%0ALjY3MzAyOTc2IEwyMC45NDI4NDk5LDIuNjQwNDMxODMgTDIwLjk0Mjg0OTksNy4zMjYzODMzOSBM%0D%0AMjAuOTQyODQ5OSwxMi4wMTIzMzQ5IEwyMS4yNjk0MjE5LDExLjk3OTczNyBDMjEuNDQ4NjgxNSwx%0D%0AMS45NTgxMjMyIDIxLjY3MTk1NzQsMTEuOTAzOTExNCAyMS43NjQyNDk1LDExLjg1NTAxNDUgWiIg%0D%0AaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjY1NDY2%0D%0ANTMsNy4zMjY3Mzc3MiBMMjYuNjU0NjY1MywwLjIxMzY1ODEzMSBMMjguMzEzNzkzMSwwLjIxMzY1%0D%0AODEzMSBMMjkuOTY3NTk2MywwLjIxMzY1ODEzMSBMMzAuMDI3NTg2MiwwLjQzMDg1OTUxNiBDMzAu%0D%0AMDU0OTE4OSwwLjU1MDI2NzEyOCAzMC4xMDkyMjkyLDAuNzUxMTY5NTUgMzAuMTQxODg2NCwwLjg3%0D%0AMDU3NzE2MyBMMzAuMjAxODc2MywxLjA5ODc2MjYzIEwzMC4zNTk0ODI4LDAuOTAzMTc1MDg3IEMz%0D%0AMC41NjY0MywwLjY1MzM3NTc3OSAzMS4xNzU1NTc4LDAuMjUxNTcwOTM0IDMxLjUyMzQyOCwwLjEz%0D%0AMjE2MzMyMiBDMzIuMzc3NDg0OCwtMC4xNTU1NDg3ODkgMzMuNDAwMTUyMSwwLjA0NTM1MzYzMzIg%0D%0AMzQuMDYzOTQ1MiwwLjY0Mjc0NjAyMSBDMzQuMzk1ODQxOCwwLjk0MTQ0MjIxNSAzNC41NjQ0NTIz%0D%0ALDEuMjI5MTU0MzMgMzQuNjg5NDAxNiwxLjcwNzEzOTEgQzM0Ljc4MjA0ODcsMi4wNTQ3MzIxOCAz%0D%0ANC43ODczNzMyLDIuNDI5MjUzOTggMzQuNzg3MzczMiw2LjI5NTI5Njg5IEwzNC43ODczNzMyLDEw%0D%0ALjUwMzI2MzcgTDM0LjY0MDQxNTgsMTAuODE4MjU4OCBDMzQuMzQxMTc2NSwxMS40NTM1NjQgMzMu%0D%0AOTIyMzEyNCwxMS44MDExNTcxIDMzLjIzNjg2NjEsMTEuOTc0Nzc2NSBDMzIuNzU4MDEyMiwxMi4w%0D%0AOTQxODQxIDMxLjk5NjYwMjQsMTIuMDk0MTg0MSAzMS41NjE0MDk3LDExLjk2OTQ2MTYgQzMxLjE5%0D%0ANjg1NiwxMS44NjYzNTI5IDMwLjcyMzY4MTUsMTEuNTg5MjcwNiAzMC40MTM3OTMxLDExLjMwMTU1%0D%0AODUgQzMwLjMxNTgyMTUsMTEuMjAzNzY0NyAzMC4yMjM1Mjk0LDExLjEyNzkzOTEgMzAuMjEyNTI1%0D%0ANCwxMS4xMjc5MzkxIEMzMC4yMDE1MjEzLDExLjEyNzkzOTEgMzAuMTkwODcyMiwxMS44NzIwMjIx%0D%0AIDMwLjE5MDg3MjIsMTIuNzg0MDU1NCBMMzAuMTkwODcyMiwxNC40NDAxNzE2IEwyOC40MjMxMjM3%0D%0ALDE0LjQ0MDE3MTYgTDI2LjY1NTM3NTMsMTQuNDQwMTcxNiBMMjYuNjU1Mzc1Myw3LjMyNjczNzcy%0D%0AIEwyNi42NTQ2NjUzLDcuMzI2NzM3NzIgWiBNMzAuOTE5MjY5OCw5Ljk2NTM5NzkyIEMzMS4yNDU0%0D%0AODY4LDkuODI5NjkxMzUgMzEuMjQ1NDg2OCw5Ljg0NTk5MDMxIDMxLjI2NzQ5NDksNi40MzA2NDkx%0D%0AMyBDMzEuMjc4NDk5LDQuNjg3NzIzMTggMzEuMjYyMTcwNCwzLjExMzEwMTczIDMxLjIzNDgzNzcs%0D%0AMi44MTk3MjA0MiBDMzEuMTg1ODUxOSwyLjM2MzcwMzgxIDMxLjE2NDE5ODgsMi4yOTMxOTMwOCAz%0D%0AMS4wMzg4OTQ1LDIuMTg0NDE1MjIgQzMwLjg1Mzk1NTQsMi4wMjcwOTQ4MSAzMC42MTQ3MDU5LDIu%0D%0AMDI3MDk0ODEgMzAuNDM1MDkxMywyLjE4NDQxNTIyIEMzMC4yMDExNjYzLDIuMzg1MzE3NjUgMzAu%0D%0AMTg0ODM3NywyLjcyMTkyNjY0IDMwLjIwMTE2NjMsNi4zMjcxODYxNiBDMzAuMjE3NDk0OSw5Ljkw%0D%0ANTUxNjk2IDMwLjIxNzQ5NDksOS44NzI5MTkwMyAzMC41MTEwNTQ4LDkuOTgxMzQyNTYgQzMwLjcw%0D%0ANzM1MjksMTAuMDUyNTYxOSAzMC43MTI2Nzc1LDEwLjA1MjU2MTkgMzAuOTE5MjY5OCw5Ljk2NTM5%0D%0ANzkyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAg%0D%0AICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
const IMDBRatings = ({ rating }) => {
  return (
    <span className="label">
      <span className="imdb-logo-container">
        <img className="imdb-logo" src={image} />
      </span>
      <span className="imdb-rating">{rating}</span>
    </span>
  );
};
export default IMDBRatings;