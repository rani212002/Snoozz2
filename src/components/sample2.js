<div class="card  bg-transparent card_dash border_theme p-3 mt-3 mb-3 card_dash bg-transparent gl_morph  cards_shadow">
    <h4 class="text-center blink ">Current Price : ${{round($snoozz_current_price,
        env('DECIMAL'))}}</h4>
</div>
<div class="card card_dash bg-transparent gl_morph  border-1 border_theme">
    <div class="card-body text-center">
        <h2 class="text-start color_theme h2">${{$dlr_token_sale}}</h2>
        <div class="d-flex justify-content-between">
            <p class="text_light">{{$goal_per}}% of minimum goal raised</p>
            <button type="button" class="btn bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Snoozz has raised {{$goal_per}}% of minimum goal of ${{$goal}}">
                <i class="fa-duotone fa-info fa-xs p-2 bg_theme text_light fa i_icone"></i>
            </button>
        </div>
        <div class="progress mt-2 mb-1">
            <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75"
                aria-valuemin="0" aria-valuemax="{{$goal}}">
            </div>
        </div>
        <p class="text-end text_light">${{$goal}}</p>
        <div class="border-1 mt-2">
            <div class="border_theme rounded d-flex justify-content-between">
                <p class="p text-start pt-2 ps-2 text_light">Participants</p>
                <h2 class="text-start ps-2 pe-2 h2 text_light">{{$participant}}</h2>
            </div>
        </div>
        <div class="border-1 mt-2">
            <div class="border_theme rounded">
                @if($per > 0)
                <div id="timer-div">
                    <p class="text-start pt-2 ps-2 text_light">{{$per}}% bonus end in:</p>
                    <span id="countdown" class="timer"></span>
                    <div class="d-flex w-auto mx-auto">
                        <div class="launch_time mx-auto mt-2 mb-2 ">
                            <p id="days" class="text_light">00</p>
                            <span class="text_light">Days</span>
                        </div>
                        <div class="launch_time mx-auto mt-2 mb-2">
                            <p id="hours" class="text_light">00</p>
                            <span class="text_light">Hours</span>
                        </div>
                        <div class="launch_time text_light mx-auto mt-2 mb-2">
                            <p id="min">00</p>
                            <span>Min</span>
                        </div>
                        <div class="launch_time text_light mx-auto mt-2 mb-2">
                            <p id="sec">00</p>
                            <span>Sec</span>
                        </div>
                    </div>
                </div>
                @else
                <p class="pt-2 pb-2 ps-2 text_light">Wait for next bonus</p>
                @endif
            </div>
        </div>
        <div class="text-center mt-2  border_theme rounded">
            <p class="p text-start text_light pt-2 ps-2">Amount</p>
            <div class="row mx-2">
                <div class="col-5 text-start">
                    <label for="exampleInputEmail1" class="form-label text-start">USD</label>
                </div>
                <div class="col-7 text-start">
                    <label for="exampleInputEmail1" class="form-label text-start">Conversion value</label>
                </div>
            </div>

            <div class="d-flex">
                <div class="input-group mx-2">
                    <input type="number" class="coin-two-price form-control rounded" placeholder="USD"
                        aria-label="Text input with dropdown button">
                    <input type="text" class="form-control coin-one-price btn_inp ms-2" placeholder="Conversion value"
                        readonly="readonly">
                    <button id="conv-value" class="btn color_theme  border_theme dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">BNB</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li class="conv-coin" id="active-BNB"><a class="dropdown-item d-flex" href="#"><img
                                    src="{{ asset('/'.$ver.'/img/coins/bnb.png')}}" class="w-25 p-2" alt="...">BNB</a>
                        </li>
                        <li class="conv-coin" id="active-USDT"><a class="dropdown-item d-flex" href="#">
                                <img src="{{ asset('/'.$ver.'/img/coins/trc_20.png')}}" class="w-25 p-2"
                                    alt="..."><span>USDT</span>
                            </a></li>
                        <li class="conv-coin" id="active-ETH"><a class="dropdown-item d-flex" href="#"><img
                                    src="{{ asset('/'.$ver.'/img/coins/et.png')}}" class="w-25 p-2"
                                    alt="..."><span>ETH</span>
                            </a></li>
                    </ul>
                </div>
            </div>
            <div class="pb-2 text-start">
                <div class="ps-2 text_light mt-2 mb-2">Snoozz Amount: <span class="tokens"></span></div>
                <div class="ps-2 text_light mt-2 mb-2">ZSnoozz Amount: <span class="bonus-tokens"></span>
                </div>
            </div>
            <div class="mb-3 mt-2">
                <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label text_light" for="flexCheckChecked">
                    I agree with Terms and Conditions !!
                </label>
            </div>
        </div>
    </div>
</div>

<div class="text-center mt-3">
    <button type="button" id="submit-buytoken" class="btn btn-sm bg_theme w-100 mx-auto">Buy
        Now</button>
</div>