<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                    Ch01. Vue Start
                </button>
            </h2>
            <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Home</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    Ch02. Component & Routing
                </button>
            </h2>
            <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam01View" class="nav-link">Exam01View: View Component(Single File)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam02View" class="nav-link">Exam02View: View Component(Folder)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam03View" class="nav-link">Exam03View: UI Component(Public & Local)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam04View" class="nav-link">Exam04View: View Movement</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam05View" class="nav-link">Exam05View: Nested Routes</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam06View" class="nav-link">Exam06View: URL Data</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    Ch03. Data Binding
                </button>
            </h2>
            <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam01Expressions" class="nav-link">Exam01Expressions: Expressions</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam02NotState" class="nav-link">Exam02NotState: General Data</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam03State" class="nav-link">Exam03State: State Data</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam04ComputedFunBinding" class="nav-link">Exam04ComputedFunBinding:<br>Computed Function Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam05AttrBinding" class="nav-link">Exam05AttrBinding: Attribute Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam06InnerHtmlBinding" class="nav-link">Exam06InnerHtmlBinding: Inner Html Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam07IfShowBinding" class="nav-link">Exam07IfShowBinding: If Show Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam08RepeatBinding" class="nav-link">Exam08RepeatBinding: Repeat Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam09FormBinding" class="nav-link">Exam09FormBinding: Form Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam10FallthroughAttr" class="nav-link">Exam10FallthroughAttr: Fallthrougn Attribute<br>템플릿 루트로 전달되는 속성</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam11Slot" class="nav-link">Exam11Slot: Slot</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    Ch04. Event Handling Watch
                </button>
            </h2>
            <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch04EventHandlingWatch/Exam01EventHandling" class="nav-link">Exam01EventHandling : Event Handling</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch04EventHandlingWatch/Exam02Watch" class="nav-link">Exam02Watch : Watch State Change</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    Ch05. Data Delivery
                </button>
            </h2>
            <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam01Props" class="nav-link">Exam01Props : Parent to Child(Prop)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam02EventEmit" class="nav-link">Exam02EventEmit : Child to Parent(Event)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam03ProvideInject" class="nav-link">Exam03ProvideInject : Provide & Inject<br>(하위 컴포넌트 전체에 데이터 제공)</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                    Ch06. Lifecycle Hook
                </button>
            </h2>
            <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch06LifecycleHook/Exam01LifecycleHook" class="nav-link">Exam01LifecycleHook : LifecycleHook</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch06LifecycleHook/Exam02DomElementRef" class="nav-link">Exam02DomElement : DOM Elements Reference </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                    Ch07. Vuex State Management
                </button>
            </h2>
            <div id="collapse7" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch07VuexStateManagement/Exam01RootState" class="nav-link">Exam01RootState : Root State Read & Update</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch07VuexStateManagement/Exam02CounterState" class="nav-link">Exam01RootState : Counter State Read & Update</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                    Ch08. Rest API
                </button>
            </h2>
            <div id="collapse8" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch08RestAPI/Exam01Promise" class="nav-link">Exam01Promise : Promise Asynchronous Processing</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch08RestAPI/Exam02Join" class="nav-link">Exam02Join : Sign Up</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch08RestAPI/Exam03Login" class="nav-link">Exam03Login : Login</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch08RestAPI/Exam04Board/BoardList" class="nav-link">Exam04BoardList : Board List</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>