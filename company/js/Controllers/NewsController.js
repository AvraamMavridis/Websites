'use strict';

MyCompany.controller('NewsController', function NewsController($scope){

	

	$scope.news = {
		 elements: [
		 {
		 "name": "Hydrogen",
		 "date": "24/9/2014",
		 "description" : "Apple today announced that Peter Oppenheimer, Apple’s senior vice president and CFO, will retire at the end of September. Luca Maestri, Apple’s vice president of Finance and corporate controller, will succeed Oppenheimer as CFO reporting to Apple CEO Tim Cook. Oppenheimer will transition the CFO role to Maestri in June and the balance of his responsibilities over the remaining time allowing for a seamless transition. “Peter has served as our CFO for the past decade as Apple’s annual revenue grew from $8 billion to $171 billion and our global footprint expanded dramatically,” said Cook. “His guidance, leadership and expertise have been instrumental to Apple’s success, not only as our CFO but also in many areas beyond finance, as he frequently took on additional activities to assist across the company. His contributions and integrity as our CFO create a new benchmark for public company CFOs."
		 },
		 {
		 "name": "Whatever",
		 "date": "22/8/2014",
		 "description" : "In exploring some of the world’s tallest and most treacherous peaks, one new piece of equipment has become essential to mountaineers Adrian Ballinger and Emily Harrington: their iPad. Instead of relying on paper maps to prepare for their expeditions, they study details of remote regions using iPad and the Gaia GPS topography app. “Five years ago, it was hard to even get a paper map of some of these places,” Ballinger says. “Now with the iPad it’s remarkable how much we can plan ahead.” The climbers also use iPad to blog and post photos during an expedition instead of recounting their story when the trek is over. And iPad is an important tool during extreme weather, as Ballinger and Harrington rely on it to make sure they stay on track. “In a whiteout,” says Harrington, “being able to see where you are on the mountain can be a matter of life or death. iPad is the only way to tell where we’re going"
		 },
		 {
		 "name": "Whatever",
		 "date": "22/8/2014",
		 "description" : "For the fifth consecutive year, Apple has been named overall winner in Laptop Mag’s “Best and Worst Laptop Brands.” The magazine evaluated notebooks from nine manufacturers in a range of categories, from reviews and tech support to design and software. “For a remarkable fifth year in a row,” the magazine writes, “Apple has proved once again that it’s still the gold standard of laptop makers.” Apple won four out of eight categories and tied for first in two others, and all four MacBook models reviewed received Editor’s Choice awards. “Often imitated, never duplicated,” the reviewers concluded. “The clean, modern look of Apple’s MacBook has set the standard for portability and power, which is why so many other notebooks look like clones.”"
		 },

		{
		 "name": "Whatever",
		 "date": "22/8/2014",
		 "description" : "Soundgarden will join an all-star lineup playing the iTunes Festival at SXSW on March 13, Apple has announced. The Seattle-based band will perform the entire “Superunknown” album to celebrate the recording’s 20th anniversary. The festival will be held March 11-15 in Austin, Texas, and will also feature Coldplay, Imagine Dragons, Pitbull, Keith Urban, and more. You’ll be able to watch the performances live or on demand from iTunes."
		 }
		 ]
	};

	$scope.UpVote = function () {
		alert("sdadas");
	}
});