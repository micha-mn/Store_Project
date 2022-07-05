function setJwt(jwt)
{
	sessionStorage.setItem("jwt",jwt);
}

function getJwt()
{
	return sessionStorage.getItem("jwt");
}
function clearSessionStorage()
{
	sessionStorage.clear();
}
function setFirstLastName(firstName, lastName)
{
	sessionStorage.setItem("firstLastName",firstName+" "+lastName);
}
function getFirstLastName()
{
	return sessionStorage.getItem("firstLastName");
}