// Dynamically import the reasons
reasons = [
	{
		"reason": "Crabs are superior to everything else",
		"elab": "Scientific research shows this, totally.",
		"image": "assets/medal.png"
	},
	{
		"reason": "Crabs are smart",
		"elab": "Scientific research shows this, totally.",
		"image": "assets/brain.png"
	},
	{
		"reason": "Crabs will stop climate change",
		"elab": "Scientific research shows this, totally.",
		"image": "assets/temp.png"
	},
	{
		"reason": "Crabs will stop pollution",
		"elab": "Scientific research shows this, totally.",
		"image": "assets/factory.png"
	},
	{
		"reason": "Crabs will provide education",
		"elab": "Scientific research shows this, totally.",
		"image": "assets/edu.png"
	},
	{
		"reason": "Crabs will end world hunger",
		"elab": "Scientific research shows this, totally.",
		"image": "assets/hunger.png"
	},
	{
		"reason": "Crabs will stop government corruption",
		"elab": "Scientific research shows this, totally.",
		"image": "assets/gov.png"
	},
	{
		"reason": "Crabs will provide jobs for the unemployed",
		"elab": "Scientific research shows this, totally.",
		"image": "assets/job.jpeg"
	},
]

for (reason of reasons){
	document.getElementById("crab_reasons").innerHTML += `<div class="crab_reason">
<img src="${reason.image}" width=150><div><span class="crab_brief bold">${reason.reason}</span><span class="crab_elab">${reason.elab}</span></div>
</div`
}

document.querySelector("#yt_cont .close").onclick = function(){
	document.getElementById("yt_video").classList.toggle("hide")
	document.querySelector("#yt_cont .close").innerHTML = (document.querySelector("#yt_cont .close").innerHTML === "×" ? "🦀" : "&times;")
}