# Angular the complete guide

 - Basics
    - creating an angular app
    - How an angular app is loaded
    - Components
        - Creating custom component
        - @Component() decorator
            - selector
            - template / templateUrl
            - styles / styleUrls
- Data binding (all-binding, data-binding-assignment)
    - One way binding
        - TS -> HTML
            - String interpolation
            - Property binding
        - HTML -> TS
            - Event binding
            - $event
    - Two way binding
- Directives (learn-directives, directives-assignment)
    - ngIf
    - ngIf else
    - ngFor
    - ngSwitch, ngSwitchCase, ngSwitchDefault
    - ngStyle
    - ngClass
- Custom Properties and Events (cmp-binding)
    - PARENT -> CHILD
        - @Input() [ PROPERTY BINDING ]
    - CHILD -> PARENT
        - @Output() [ EVENT BINDING ]
    - Local Reference 
    - View Encapsulation
    - @ViewChild()
    - @ContentChild()
    - < ng-content >
- Lifecycle hooks (cmp-binding)
    1. ngOnChanges()
    2. ngOnInit()
    3. ngDoCheck()
    4. ngAfterContentInit()
    5. ngAfterContentChecked()
    6. ngAfterViewInit()
    7. ngAfterViewChecked()
    8. ngOnDestroy()
- Custom directives (first-app -> learn-directives)
    - @Directive()
    - Attribute directive 
        - ElementRef, Renderer2, @HostBinding()
        - @HostListner()
    - Structural directive
        - @Input() set, TemplateRef<>, ViewContainerRef

