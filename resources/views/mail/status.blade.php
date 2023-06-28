@extends('mail.redirect')
@section('content')
@if ($page == 'success')
<span>Your account has been verified.</span>
@else
<span>Verify failed, please re-verify!</span>
@endif
@endsection