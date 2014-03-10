'use strict';

beardedBadger.controller('sections',
	function EventController($scope) {

		$scope.snippet = '<span style="color:red">hi there</span>'
		$scope.boolValue = true;
		$scope.myStyle = {color:'red'};
		$scope.myClass = 'red';
		$scope.buttonDisabled = false;

		$scope.section = {
			columns: {
				column1: {
					title: 'Define.',
					content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
				},
				column2: {
					title: 'Design.',
					content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
				},
				column3: {
					title: 'Deliver.',
					content: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
				}
			},
			responsive: {
				title: 'Responsive Design',
				content: 'Paragraph.'
			}
		}
		// $scope.event = {
		// 	name: 'Angular Boot Camp',
		// 	date: '1/1/2014',
		// 	time: '10:30 am',
  //           location: {
  //               address: "Google HQ",
  //               city: "Mountain View",
  //               province: "CA"
  //           },
  //           logoUrl:'img/angular-logo.png',
  //           sessions: [
  //           	{
  //           		name: 'Directives Masterclass',
  //           		creatorName: 'Bob Smith',
  //           		duration: '1 hour',
  //           		level: 'Advanced',
  //           		abstract: 'In this session you will learn the ins & outs of directives!', 
  //           		upVoteCount: 3
  //           	},
  //           	{
  //           		name: 'Scopes for Fun & Profit',
  //           		creatorName: 'John Doe', 
  //           		duration: '1 hour', 
  //           		level: 'Introductory', 
  //           		abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.', 
  //           		upVoteCount: 2
  //           	},
  //           	{
  //           		name: 'Well Behaved Controllers', 
  //           		creatorName: 'Jane Doe', 
  //           		duration: '2 hours', 
  //           		level: 'Intermediate',
  //           		abstract: 'Controlelrs are the beginning of everything Angular does. Learn to craft controllers that will win the respect of your friends & neightbors.', 
  //           		upVoteCount: 35
  //           	}
  //           ]
		// }

		// $scope.upVoteSession = function(session) {
		// 	session.upVoteCount++;
		// };

		// $scope.downVoteSession = function(session) {
		// 	session.downVoteCount--;
		// };
	}
);