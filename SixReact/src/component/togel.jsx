export function Togel(){
    return <div>
        <div class="flex justify-center mb-6">
                <div id="toggle-count" class="p-1 inline-block bg-white rounded-lg">
                    <label for="toggle-count-monthly" class="relative inline-block py-2 px-3">
                    <span class="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer">
                        Monthly
                    </span>
                    <input id="toggle-count-monthly" name="toggle-count" type="radio" class="absolute top-0 end-0 size-full border-transparent bg-transparent bg-none text-transparent rounded-lg cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-lg checked:before:bg-gray-200 checked:bg-none focus:ring-transparent focus:ring-offset-0" />
                    </label>
                    <label for="toggle-count-annual" class="relative inline-block py-2 px-3">
                    <span class="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer">
                        Annual / 15% off
                    </span>
                    <input id="toggle-count-annual" name="toggle-count" type="radio" class="absolute top-0 end-0 size-full border-transparent bg-transparent bg-none text-transparent rounded-lg cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-lg checked:before:bg-gray-200 checked:bg-none focus:ring-transparent focus:ring-offset-0" checked="" />
                    </label>
                </div>
                </div>

                <div class="grid sm:grid-cols-3 lg:items-center bg-white rounded-xl divide-x divide-gray-200">
                <div class="flex flex-col p-4">
                    <h4 class="text-gray-800 mb-1">Startup</h4>
                    <div class="flex gap-x-1">
                    <span class="text-xl font-normal text-gray-800">$</span>
                    <p data-hs-toggle-count='{
                        "target": "#toggle-count",
                        "min": 19,
                        "max": 29
                        }' class="text-gray-800 font-semibold text-3xl">
                        19
                    </p>
                    </div>

                    <ul class="mt-5 space-y-2 text-sm">
                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        2 users
                        </span>
                    </li>

                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        Plan features
                        </span>
                    </li>

                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        Product support
                        </span>
                    </li>
                    </ul>

                    <button type="button" class="mt-4 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Get started
                    </button>
                </div>

                <div class="flex flex-col p-4">
                    <div class="flex justify-between">
                    <h4 class="text-gray-800 mb-1">Team</h4>
                    <div>
                        <span class="inline bg-violet-500 font-medium text-white text-[10px] leading-4 uppercase rounded-md py-1 px-2">
                        Hot
                        </span>
                    </div>
                    </div>
                    <div class="flex gap-x-1">
                    <span class="text-xl font-normal text-gray-800">$</span>
                    <p data-hs-toggle-count='{
                        "target": "#toggle-count",
                        "min": 89,
                        "max": 99
                        }' class="text-gray-800 font-semibold text-3xl">
                        89
                    </p>
                    </div>

                    <ul class="mt-5 space-y-2 text-sm">
                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        5 users
                        </span>
                    </li>

                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        Plan features
                        </span>
                    </li>

                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        Product support
                        </span>
                    </li>
                    </ul>

                    <button type="button" class="mt-4 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Get started
                    </button>
                </div>

                <div class="flex flex-col p-4">
                    <h4 class="text-gray-800 mb-1">Enterprise</h4>
                    <div class="flex gap-x-1">
                    <span class="text-xl font-normal text-gray-800">$</span>
                    <p data-hs-toggle-count='{
                        "target": "#toggle-count",
                        "min": 129,
                        "max": 149
                        }' class="text-gray-800 font-semibold text-3xl">
                        129
                    </p>
                    </div>

                    <ul class="mt-5 space-y-2 text-sm">
                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        10 users
                        </span>
                    </li>

                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        Plan features
                        </span>
                    </li>

                    <li class="flex items-center space-x-2">
                        <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span class="text-gray-500">
                        Product support
                        </span>
                    </li>
                    </ul>

                    <button type="button" class="mt-4 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Get started
                    </button>
                </div>
                </div>
    </div>
}