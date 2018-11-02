import { ServiceBus } from './service-bus';

export const bookingsComponent: angular.IComponentOptions = {
    controller: ['$scope', '$location', function($scope: angular.IScope, $location: angular.ILocationService) {
        const that = this;

        this.title = 'Your Bookings';

        this.bookings = [
            { id: '4711', from: 'Graz', to: 'New York', date: new Date() },
            { id: '4712', from: 'New York', to: 'Graz', date: new Date() }
        ];

        this.select = function(e) {
            
        }
       
    }],
    template: `
    <div style="border: dashed 5px gray; padding: 10px;">

        <div style="margin-bottom:10px;">
            <img src="assets/img/angularjs.png" height="50">
        </div>

        <div class="card">

            <div class="header">
                <h2 class="title">{{$ctrl.title}}</h2>
            </div>
            <div class="content">
    
                <ul ng-repeat="b in $ctrl.bookings" class="list-group">
                    <li class="list-group-item">
                        <a ng-click="$ctrl.select(b)">{{b.id}}, {{b.from}} - {{b.to}}, {{b.date | date:'short'}}</a>
                    </li>
                </ul>

            </div>
        </div>
    </div>        
    `
};